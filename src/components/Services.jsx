import React from "react";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#Services .service1", {
      yPercent: 20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Services .service1",
        // markers: true,
        scrub: 2,
        start: "top 30%",
        end: "top 50%",
        scroll: -1,
      },
    });
    gsap.from("#Services .service2", {
      yPercent: 20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Services .service2",
        // markers: true,
        scrub: 2,
        start: "top 30%",
        end: "top 50%",
        scroll: -1,
      },
    });

    gsap.from("#Services .service3", {
      yPercent: 20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Services .service3",
        // markers: true,
        scrub: 2,
        start: "top 30%",
        end: "top 50%",
        scroll: -1,
      },
    });
  });

  return (
    <div className="theme-background py-10" id="Services">
      <div className="flex h-full flex-col items-center  mx-4 md:mx-8 lg:mx-10 lg:p-8 p-4 ">
        <div className="flex justify-center items-center flex-col mx-10">
          <p className="text-3xl md:text-4xl  lg:text-[70px] headings border-b-[6px] pb-4">
            Services
          </p>
          <p className="text-xl text-center">
            At CodeZyar, we provide a wide range of digital solutions to help
            businesses grow, innovate, and succeed.
          </p>
        </div>


         <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 md:my-20">
            {/* Website development */}
            <div className="flex flex-col justify-between col-span-1  gap-5  pb-10  p-5 rounded-[46px] myblur shadow-3xl service1">
              
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src="./web-development.png"
                    alt=""
                    className="h-20 w-20"
                  />
                  <p className=" text-xl font-bold"> Website Development</p>
                </div>
              

              <div className="text-center">
                We build modern, responsive, and high-performance websites that
                strengthen your digital presence. From corporate websites to
                e-commerce platforms, our web development ensures speed,
                security, and a flawless user experience.
              </div>

              <div className="flex justify-center items-center">
                <button className="text-white font-medium bg-[#05b4ea] px-3 p-1 rounded-xl ">
                  Contact Us
                </button>
              </div>
            </div>

            
              {/*Graphic Desining */}
              <div className="flex flex-col justify-between col-span-1  gap-5  pb-10  p-5 rounded-[46px] myblur shadow-3xl service2">
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src="./web-development.png"
                    alt=""
                    className="h-20 w-20"
                  />
                  <p className=" text-xl font-bold">Graphic Designing</p>
                </div>

                <div className="text-center">
                  Design is the soul of branding. Our creative designers craft
                  unique and engaging visuals that tell your brand story. From
                  logos and brand identity to social media graphics and print
                  material, we make your brand unforgettable.
                </div>

                <div className="flex justify-center items-center">
                  <button className="text-white font-medium bg-[#05b4ea] px-3 p-1 rounded-xl ">
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Cloud It */}

              <div className="flex flex-col justify-between   col-span-1 gap-5  pb-10  p-5 rounded-[46px] myblur shadow-3xl service3">
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src="./cloud-computing.png"
                    alt=""
                    className="h-20 w-20"
                  />
                   <p className=" text-xl font-bold"> Cloud & IT Solutions</p>

                </div>

                
                <div className="text-center">
                  Our team delivers secure, scalable, and cost-efficient cloud
                  solutions. Whether you need cloud migration, hosting, or IT
                  consultancy, we make your business future-ready.
                </div>

                <div className="flex justify-center items-center">
                  <button className="text-white font-medium bg-[#05b4ea] px-3 p-1 rounded-xl ">
                    Contact Us
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
