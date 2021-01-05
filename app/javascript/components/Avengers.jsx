import React from "react";
import { Link } from "react-router-dom";

class Avengers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avengers: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/avengers/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ avengers: response }))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { avengers } = this.state;
    const allAvengers = avengers.map((avenger, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={avenger.image}
            className="card-img-top"
            alt={`${avenger.hero_name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{avenger.hero_name}</h5>
            <Link to={`/avenger/${avenger.id}`} className="btn custom-button">
              View Hero
            </Link>
          </div>
        </div>
      </div>
    ));
    const noAvenger = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No Heroes yet. Why not <Link to="/new_avenger">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Heroes for all kinds of missions!</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular recipes, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/avenger" className="btn custom-button">
                Create New Hero
              </Link>
            </div>
            <div className="row">
              {avengers.length > 0 ? allAvengers : noAvenger}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}
export default Avengers;