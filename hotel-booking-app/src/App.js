import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import { render } from "react-dom";
import { BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Signin from './components/sign-in';
import Register from './components/register';
import About from './components/About'
import Chatbox from './components/chatbot';
import { Component } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/sign' element={<Signin/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/chatbot' element={<Chatbox/>}/>
        </Routes>
        {/* <Home/>
        <Signin/>
        <About/> */}
        
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
