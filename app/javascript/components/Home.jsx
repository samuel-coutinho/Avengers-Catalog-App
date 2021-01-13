import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 bg-info d-flex align-items-center justify-content-center">    
    <div className="jumbotron jumbotron-fluid bg-transparent">      
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/446a20cc-3d9c-4cdf-8845-cee8c49b5076/dcbylnr-1616167e-548a-4301-acbb-072f0e9eb426.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDQ2YTIwY2MtM2Q5Yy00Y2RmLTg4NDUtY2VlOGM0OWI1MDc2XC9kY2J5bG5yLTE2MTYxNjdlLTU0OGEtNDMwMS1hY2JiLTA3MmYwZTllYjQyNi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fl4pfn08NJjqIP4VFlJ2CS8bM1QvNtMM3etsZavo6W8" id ="home_image" class="mx-auto align-top" />           
      <br/>
      <br/>    
      <div className="container secondary-color">
        <h1 className="display-4">Avengers Catalag</h1>
        <p className="lead">
          
        </p>
        <hr className="my-4" />
        <Link
          to="/avengers"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Heroes
        </Link>
      </div>
    </div>
  </div>
);