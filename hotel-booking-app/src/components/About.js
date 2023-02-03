import React from "react";
import {Link} from "react-router-dom";

function About() {
  return (

    // creating a container to hold in the About Us information
    
    <div>
      <div className="container m-t-1 text-center d-flex flex-column min-vh-100 ">
      <h1 className="text-dark">About Us</h1>
      <h4 className="text-secondary">
        <p>
          Morph Room Services
        </p>
      </h4>
      <p><strong>Morph Rooms is a Web application that provides seamless and
        user friendly user environment <br></br> to search and find homes and rooms for rent
        for the users of the system.
        <br></br>
        <br></br>
        It is build on top of an accurately trained Machine Learning Model to
         provide user recommendations <br></br> to suit the search results of 
         the user, and ease up the searching process itself.
         <br></br>
         <br></br>
         The web application provides MAchine Learning prediction based suggestions <br></br> as well as it is
         capable of handling authentication needs of the user.
         </strong></p>
         
    </div>
    </div>
  );
}

export default About;
