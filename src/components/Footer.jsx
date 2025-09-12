import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer-background ">
      <div className="flex h-full flex-col items-center  mx-4 md:mx-8 lg:mx-10 lg:p-8 p-4 ">
        <div>
          <p className="text-3xl md:text-4xl kurale lg:text-[50px] text-main-color">
            Saifa shahnawaz
          </p>
        </div>

        <footer>
          <div className="my-5 sm:my-10 ">
            <ul className="flex flex-col sm:flex-row sm:gap-5 gap-1 ">
              <li className="link text-sm md:text-xl">
                <a href="#Home">Home</a>
              </li>
              <li className="link text-sm md:text-xl">
                <a href="#About">About me</a>
              </li>

              <li className="link text-sm md:text-xl">
                <a href="#Skills">Skills</a>
              </li>
              <li className="link text-sm md:text-xl">
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li className="link text-sm md:text-xl">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center my-10 gap-7 ">
            <div className="flex items-center gap-2">
              <div>
                <a
                  href="https://wa.me/923303341493?text=Hi%20there%2C%20I%20want%20to%20hire%20you%20for%20a%20project"
                  target="_blank"
                >
                  <FaWhatsapp className="w-10 h-10 icons" />
                </a>
              </div>
            </div>

            {/* <div className="flex items-center gap-2">
              <div>
                <a href=""></a> <GrGithub className="w-10 h-10 icons" />
              </div>
            </div> */}

            <div className="flex items-center gap-2">
              <div>
                <a
                  href="https://www.linkedin.com/in/saifa-shahnawaz-7a8091318/"
                  target="blank"
                >
                  <FaLinkedinIn className="w-10 h-10 icons" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <a
                  href="https://www.instagram.com/saifashahnawaz"
                  target="blank"
                >
                  {" "}
                  <FaInstagram className="w-10 h-10 icons" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <p style={{ height: "2px", background: "#293f7b", width: "100%" }}></p>

        <div className="flex justify-center mt-3 text-xs sm:text-sm">
          Copyright &copy; Saifa shahnawaz. All right reserved
        </div>

        <div className="text-main-color kurale hover:shadow-2xl">
          <a href="https://github.com/Umarmajeed711" target="blank">
            Developed by : Muhammad Umar
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
