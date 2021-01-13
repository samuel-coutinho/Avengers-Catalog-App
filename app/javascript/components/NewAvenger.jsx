import React from "react";
import { Link } from "react-router-dom";

class NewAvenger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hero_name: "",
        real_name: "",
        status: "",
        age: "",
        description: "",
        image: ""
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }
  
    stripHtmlEntities(str) {
      return String(str)
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
  
    onChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    onSubmit(event) {
      event.preventDefault();
      const url = "/api/v1/avengers/create";
      const { hero_name, real_name, status, age, description, image } = this.state;
  
      if (hero_name.length == 0 || real_name.length == 0 || description.length == 0)
        return;
      

      const body = {
        hero_name,
        real_name,
        status,
        age,
        description,
        image
      };    
  
      const token = document.querySelector('meta[name="csrf-token"]').content;
      fetch(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.props.history.push(`/avenger/${response.id}`))
        .catch(error => console.log(error.message));
    }
  
    render() {
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
              <h1 className="font-weight-normal mb-5">
                Add a new Hero to our awesome Avengers collection.
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="avengerHeroName">Hero name</label>
                  <input
                    type="text"
                    name="hero_name"
                    id="avengerName"
                    className="form-control"
                    required
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="avengerRealName">Real Name</label>
                  <input
                    type="text"
                    name="real_name"
                    id="avengerRealName"
                    className="form-control"
                    required
                    onChange={this.onChange}
                  />                  
                </div>
                <div className="form-group">
                  <label htmlFor="avengerStatus">Hero Status</label>
                  <input
                    type="text"
                    name="status"
                    id="avengerStatus"
                    className="form-control"
                    required
                    onChange={this.onChange}
                  />                  
                </div>
                <div className="form-group">
                  <label htmlFor="avengerAge">Age</label>
                  <input
                    type="number"
                    min="1"
                    name="age"
                    id="avengerAge"
                    className="form-control"
                    required
                    onChange={this.onChange}
                  />                  
                </div>
                <div className="form-group">
                  <label htmlFor="avengerImage">Image URL</label>
                  <input
                    type="text"                    
                    name="image"
                    id="avengerImage"
                    className="form-control"
                    required
                    onChange={this.onChange}
                  />                  
                </div>
                <label htmlFor="description">Hero Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  required
                  onChange={this.onChange}
                />
                <button type="submit" className="btn custom-button mt-3">
                  Create Hero
                </button>
                <Link to="/avengers" className="btn btn-link mt-3">
                  Back to Avengers
                </Link>
              </form>
            </div>
          </div>
        </div>
      );
    }
  
  }
  
  export default NewAvenger;