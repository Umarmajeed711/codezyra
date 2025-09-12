import React, { useRef } from "react";
import "../App.css";
import { GoArrowUpRight } from "react-icons/go";
import { ReactTyped } from "react-typed";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".name", {
        x: -50,
        duration: 1,
        opacity: 0,
        delay: 1,
      }); // <-- automatically

      gsap.from(".pic", { y: 50, opacity: 0, duration: 1, delay: 1 });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div
      className="theme-background pt-20 h-screen flex justify-center items-center "
      id="Home"
      ref={container}
    >
      <div className=" grid grid-cols-1 md:grid-cols-3   mx-4 md:mx-8 lg:mx-10 lg:p-8 p-4">
        <div className="flex flex-col justify-center gap-3 md:gap-5 mt-5 col-span-1 md:col-span-2 name">
          <p className=" text-3xl md:text-4xl lg:text-[50px] poppins flex items-center gap-2 font-bold">
            Codezyra Software Solutions
          </p>
          <p className="text-xl w-[80%]">
            At CodeZyra, we craft innovative and reliable digital solutions that
            help businesses grow and stand out in today’s competitive world. Our
            team of experts specializes in custom software, modern web
            applications, and user-friendly mobile apps tailored to your needs.
          </p>
          <p>
            <span className="text-2xl  poppins font-bold md:font-semibold">
              What we offer{" "}
            </span>
            <span className="text-[26px]  poppins offers">
              <ReactTyped
                strings={[
                  "Web Development",
                  "Digital Marketing",
                  "Graphic Designing",
                ]}
                typeSpeed={50}
                loop
                backSpeed={20}
                cursorChar=">"
                showCursor={true}
              />
            </span>{" "}
          </p>

          <div className="flex gap-5">
            <a
              href="mailto:saifashahnawaz@gmail.com?subject=Hire%20Request&body=Hi%20Saifa%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you."
              target="_blank"
              className="bg-[#003366] px-4 py-2 kurale text-xl md:text-2xl lg:text-3xl rounded-2xl icons "
            >
              Explore Services
            </a>
            <a
              href="#Portfolio"
              className="px-4 py-2 kurale text-xl lg:text-2xl  rounded-2xl border flex items-center icons"
            >
              Contact Us <GoArrowUpRight className="kurale" />{" "}
            </a>
          </div>
        </div>

        {/* hero image */}

        <div className="pic">
          <div className="flex justify-center items-center col-span-1">
            <img src="./developers.png" alt="" className="h-[450px] w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
