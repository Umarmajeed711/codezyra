import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router';
import { GlobalContext } from '../context/Context';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const MyRoutes = () => {

    let {state,dispatch} = useContext(GlobalContext);
  return (
    <div>
      {state?.isLogin == false ? (
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/About"  element={<About />}></Route>
          <Route path="/Services"  element={<Services />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="/Contact"  element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      ) : state?.isLogin == true ? (
        <Routes>
         
          <Route path="/" index element={<Home />}></Route>
          <Route path="/About"  element={<About />}></Route>
          <Route path="/Services"  element={<Services />}></Route>
          <Route path="/Portfolio"  element={<Portfolio />}></Route>
          <Route path="/Contact"  element={<Contact />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      ) : (
        <div className="flex justify-center items-center main">
          <div className="loading"></div>
        </div>
      )}
    </div>
  )
}

export default MyRoutes