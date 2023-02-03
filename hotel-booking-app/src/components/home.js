import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import apiClient from "../services/apiClient";
import bookingDialogService from "../services/bookingDialogService";
import HomeBooking from './homeBooking';
import Notification from './notification';



export default function Home() {
  
  const [homesState, setHomesState] = useState([]);
  const [bookingDialogState, setBookingDialogState] = useState({ open: false, home: null });

  useEffect(() => {
    const homesDataPromise = apiClient.getHomes();

    homesDataPromise.then((homesData) => setHomesState(homesData));
  }, []);

  // performing react's useffect tio use the values that have been stored as a hook
  useEffect(() => {
    const subscription = bookingDialogService.events$.subscribe((state) => setBookingDialogState(state));

    return () => subscription.unsubscribe();
  }, [bookingDialogState]);

  let homes;

  // function to return card components to the home page
  homes = homesState.map((home) => {
    return (
      <div className="col-6 col-md-6 col-lg-4 col-xl-3 m-b-3" key={home.id}>
        <div data-testid="home" className="card w-100 bg-dark text-white home-card">
          <img data-testid="home-image" src={home.image} alt="home img" className="card-img-top" height="200" />
          <div className="card-body">
            <div data-testid="home-title" className="card-title h5 mtb-1 text-success">
              {home.title}
            </div>
            <div data-testid="home-location">{home.location}</div>
            <div data-testid="home-price">=N={home.price}/night</div>
            <div className="mtb-1 d-grid gap-2">
              <button data-testid="home-booking-btn" className="btn btn-outline-success" type="button" onClick={() => bookingDialogService.open(home)}>
                {" "}
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
    );
  });


  // returns the heading for the home page, as well as the dialog pop-up box 
  return (
    <div className="container m-t-3 text-center">
      <h1 className="text-dark">Morph Rooms</h1>
      <h4 className="text-secondary">Rooms & Homes for Rental</h4>
      <div className="m-t-3 row d-flex justify-content-center align-items-center">{homes}</div>
      <Dialog maxWidth="md" fullWidth={true} onClose={() => bookingDialogService.close()} open={bookingDialogState.open}>
        <DialogContent>
          <HomeBooking homeData={bookingDialogState.home} />
        </DialogContent>
      </Dialog>
      <Notification />
    </div>
  );
}
