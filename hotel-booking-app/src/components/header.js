import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Header () {
    return (

      // creating a header navbar component that contains links and web routing

      <div>
        <nav className="border-bottom navbar navbar-expand-lg bg-dark text-white navbar">
          <div className="container-fluid">
            <a data-testid="logo" href="/#" className="navbar-brand m-l-4">
              <img src="images/main-logo.png" alt="main logo" width="140" height="100" />
            </a>
            <form data-testid="search" className="mr-auto w-50 form-inline">
              {/* <input placeholder="Search for homes" type="text" className="w-50 form-control" /> */}
            </form>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartoggler" aria-controls="navbartoggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div data-testid="menu" className=" m-r-4 collapse navbar-collapse d-flex justify-content-end text-uppercase navbar-nav" id="navbartoggler">


            <Link to="/chatbot" style={{color: 'LightBlue', paddingRight: 20, textDecoration: 'none'}}>
                    ChatBot
              </Link>

              <Link to="/home" style={{color: 'LightGreen', paddingRight: 20, textDecoration: 'none'}}>
                    Home
              </Link>

              <Link to="/about" style={{color: 'LightGreen', paddingRight: 10, textDecoration: 'none'}}>
                    About
              </Link>

              <button href="#link" type="button" className="btn btn-outline-success">
              <Link to="/sign" style={{color: 'MediumSpringGreen', paddingLeft: 3, textDecoration: 'none'}}>
                Login
              </Link>
              </button>

              <button href="#link" type="button" className="btn  btn-outline-success">
                <Link to='/register' style={{color: 'MediumSpringGreen', paddingLeft: 3, textDecoration: 'none'}}>
                Create an Account
                </Link>

              </button>
            </div>
          </div>
        </nav>
        {/* <div className="m-0 px-4 py-2 container-fluid mw-100 border-bottom container d-flex justify-content-center">
          <button data-testid="home-type" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            <Link to="/HomeTypes" style={{ textDecoration: 'none' }}>Home Type</Link>
          </button>
          <button data-testid="dates" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            <Link to="/Dates" style={{ textDecoration: 'none' }}>Dates</Link>
          </button>
          <button data-testid="guests" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            <Link to="/Guests" style={{ textDecoration: 'none' }}>Guests
            </Link>
          </button>
          <button data-testid="price" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            <Link to="/Price" style={{ textDecoration: 'none' }}>Price</Link>
          </button>
          <button data-testid="rooms" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            <Link to="/Rooms" style={{ textDecoration: 'none' }}>Rooms</Link>
          </button>
          <button data-testid="amenities" type="button" className="text-nowrap m-r-2 py-1 btn btn-outline-secondary">
            <Link to="/Amenities" style={{ textDecoration: 'none' }}>Amenities</Link>
          </button>
        </div> */}
      </div>
    );
};