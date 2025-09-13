import React, { useRef, useState } from "react";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const showSideBar = () => {
    setShow(!show);
    console.log("show side bar");
  };
  return (
    <nav className=" bg-white shadow-md fixed  z-50 nav-bar w-full">
      {/* nav-links */}
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center ">
        <div className="text-3xl md:text-4xl  lg:text-[50px]  logo">
          Codezyra
        </div>

        <div className="md:hidden">
          <button onClick={showSideBar}>
            {show ? <MdOutlineClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6  font-medium ">
          <li className="link text-xl ">
            {/* <a href="#Home">Home</a> */}
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="link text-xl">
            <NavLink
              to={"/About"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : ""}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="link text-xl">
            <NavLink
              to={"/Services"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : ""}`
              }
            >
              Services
            </NavLink>
          </li>
          <li className="link text-xl">
            <NavLink
              to={"/Portfolio"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : ""}`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="link text-xl">
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-400" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {show ? (
        <nav className=" md:hidden nav-bar px-4 pt-2 pb-4 shadow-md  ">
          {/* sideLinks */}
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="link text-sm sm:text-xl" onClick={showSideBar}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="link text-sm sm:text-xl" onClick={showSideBar}>
              <NavLink to={"/About"}>About Us</NavLink>
            </li>
            <li className="link text-sm sm:text-xl" onClick={showSideBar}>
              <NavLink to={"/Services"}>Services</NavLink>
            </li>
            <li className="link text-sm sm:text-xl" onClick={showSideBar}>
              <NavLink to={"/Portfolio"}>Portfolio</NavLink>
            </li>
            <li className="link text-sm sm:text-xl" onClick={showSideBar}>
              <NavLink to={"/Contact"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </nav>
  );
};
export default Navbar;
