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
            width="800"
            height="200"
            alt={`${avenger.hero_name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">Hero Name:  
            <Link to={`/avenger/${avenger.id}`} className="card-title">
              {avenger.hero_name}
            </Link></h5>            
            <h6 className="card-title">Real Name: {avenger.real_name}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Status: {avenger.status}</h6>
            
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
        <section className="jumbotron jumbotron-fluid mx-auto">
          <h1 className="display-5 text-center">Heroes for all kinds of missions!</h1>
          <div class="d-flex flex-wrap align-content-center">
            <img src="https://preview.redd.it/8yonn7m4bfk31.jpg?width=960&crop=smart&auto=webp&s=dd7017d64e4ee18110ec3b608c248671b6427662" class="mx-auto"  />           
          </div>
          <br></br>
          <p className="lead text-muted text-center">
              We have gathered our most popular and powerful heroes
	            for the most important and dangerous missions to protect the Earth.
          </p>          
         
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
            
          </main>
        </div>
      </>
    );
  }
}
export default Avengers;