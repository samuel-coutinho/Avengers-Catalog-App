import React from "react";
import { Link } from "react-router-dom";

class Avenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avenger: { real_name: "" } };
    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deleteAvenger = this.deleteAvenger.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ avenger: response }))
      .catch(() => this.props.history.push("/avengers"));
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  deleteAvenger() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/avengers"))
      .catch(error => console.log(error.message));
  }

  render() {
    const { avenger } = this.state;
    let informationtList = "No Heroes available";

    if (avenger.real_name.length > 0) {
      
      informationtList = [avenger.hero_name, avenger.real_name, avenger.age, avenger.status]
        
        .map((ingredient, index) => (
          <li key={index} className="list-group-item">
            {ingredient}
          </li> 
        ));
    }
    const avengerDescription = this.addHtmlEntities(avenger.description);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={avenger.image}
            alt={`${avenger.hero_name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {avenger.hero_name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Hero's Profile</h5>
                {informationtList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Hero Description</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${avengerDescription}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger" onClick={this.deleteAvenger}>
                Delete Hero
              </button>
            </div>
          </div>
          <Link to="/avengers" className="btn btn-link">
            Back to Avengers
          </Link>
        </div>
      </div>
    );
  }

}

export default Avenger;