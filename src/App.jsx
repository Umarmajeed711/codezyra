import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NewNav from './components/NewNav';
import { useState } from 'react';
import Swal from 'sweetalert2';

const  App = () =>  {

  return (
   <div >
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>




  );
}

export default App;
