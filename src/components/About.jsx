import React from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#About .aboutPic", {
      yPercent: 10,
      duration: 1,
      ease: "power1.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#About .aboutPic",
        scrub: 2,
        start: "top 50%",
        end: "top 40%",
        scroll: -1,
      },
    });
    gsap.from("#About .aboutInfo", {
      xPercent: -10,
      duration: 1,
      ease: "power1.out",
      opacity: 0,
      scrollTrigger: {
        trigger: "#About .aboutInfo",
        // markers: true,
        scrub: 2,
        start: "top 50%",
        end: "top 40%",
        scroll: -1,
      },
    });
  });

  return (
    <div className="aboutBackground " id="About">
      <div className="flex h-full flex-col items-center   mx-4 md:mx-8 lg:mx-10 lg:p-8 p-4">
        <div className="flex justify-center items-center gap-3 md:gap-5 flex-col">
          <p className="text-3xl md:text-4xl  lg:text-[70px] text-[#174978] mt-5 headings">About Us</p>
          <p className="text-[#174978] text-2xl font-medium">Codezyra</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  my-10">
          <div className="col-span-1 flex justify-center items-center aboutPic">
            <img
              src="/image.png"
              alt=""
              className="h-[450px] w-full  "
            />
          </div>

          <div className="col-span-1 poppins text-sm md:text-xl   aboutInfo flex flex-col gap-3 ">
            <p className="text-[#174978]">
              {" "}
              Welcome to CodeZyar, a software house built with passion, innovation, and a vision to
empower businesses through technology. In today’s fast-changing digital era, we believe every business deserves smart,
reliable, and future-ready solutions — and that’s exactly what we deliver.

            </p>
            <hr />
            <p className="text-[#174978]">
We started CodeZyar with a simple idea: to
bridge the gap between business needs and modern technology. Over time, we have grown into a team of talented developers,
creative designers, and strategic thinkers who share a common mission — to help companies grow, scale, and succeed in the
digital world.</p>
 <hr />
<p className="text-[#174978]">
  CodeZyar was founded with the belief that technology should work for people, not the other way around.
From the beginning, our goal has been to provide custom-made software solutions that are not only functional but
also user-friendly and scalable. 
<span><Link className="text-[#174978] font-semibold hover:text-[#135898] " to="/About">Read more</Link></span>

</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
