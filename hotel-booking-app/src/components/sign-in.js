import React, { useState } from 'react';
import { auth } from '../firebase';
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

const Signin = () => {


  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");


  const [user, setUser] = useState({});

  onAuthStateChanged(auth,  (currentUser) => {
    setUser(currentUser)
  }) 


  const login = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);

    } catch (error) {
      console.log(error.message);
    }
    
  };




  return (


<div class="d-flex justify-content-around min-vh-100">
  {/* <div class="p-2"></div> */}

  {/* <div className='p-3'>
    <h1>Sign-in</h1>
  </div> */}

<div className="p-2 col-6 col-md-6 col-lg-4 col-xl-3 m-b-3 shadow-lg p-3 mb-5 bg-white rounded">
<div data-testid="home" className="card w-100 bg-dark text-white home-card">
  <div className="card-body">
  
  <form>
    <h2> Sign in</h2>
  <div class="form-group">
    <label for="exampleInputEmail1">email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => {setloginEmail(event.target.value)}}/>
  <div class="form-group form-check">

  </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event) => {setloginPassword(event.target.value)}}/>
  </div>

  <div class="form-group form-check">
    {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
  </div>
  {/* <button type="submit" class="btn btn-primary ">Submit</button> */}
</form> 

    <div className="mtb-16 d-grid gap-2">
      <button onClick={login} data-testid="home-booking-btn" className="btn btn-outline-success" type="submit">
        {" "}
        Sign in
      </button>
      

      <div class="form-group form-check">
    {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
    </div>



      <div class="form-group d-flex justify-content-around">
        <h5> User Signed in as: </h5>
      </div>

      <div class="form-group d-flex justify-content-around">
      {user?.email}
      </div>

    </div>

    


  </div>
</div>
</div>

</div>
  );
}

export default Signin;