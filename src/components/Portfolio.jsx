import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#Portfolio .project1", {
      y: -20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Portfolio .project1",
        // markers: true,
        scrub: 2,
        start: "top 40%",
        end: "top 40%",
        scroll: -1,
      },
    });
    gsap.from("#Portfolio .project2", {
      y: -20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Portfolio .project2",
        // markers: true,
        scrub: 2,
        start: "top 50%",
        end: "top 50%",
        scroll: -1,
      },
    });

    gsap.from("#Portfolio .project3", {
      y: -20,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Portfolio .project3",
        // markers: true,
        scrub: 2,
        start: "top 70%",
        end: "top 70%",
        scroll: -1,
      },
    });
  });

  return (
    <div className="aboutBackground" id="Portfolio">
      <div className="flex h-full flex-col items-center mx-4 md:mx-8 lg:mx-10 p-4 lg:p-8 py-10 ">
        <div className="flex justify-center items-center flex-col">
          <p className="text-3xl md:text-4xl headings lg:text-[70px] text-[#174978] mt-5">
            Portfolio
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 md:my-20">
            {/* card 1 */}
            <div className="rounded  p-2 border col-span-1 h-full project project1">
              <div>
                <img
                  src="/project1.png"
                  alt=""
                  className="w-full bg-slate-400 h-48"
                />
              </div>
              <div>
                <p className="text-xl text-main-color">Swankwearr</p>
                <p className="text-sm text-gray-400">
                  Swankwearr premium Drop shoulder T-shirts in Pakistan
                </p>
                <span>
                  {" "}
                  <a
                    href="https://swankwearr.com/"
                    target="blank"
                    className="bg-[#174978] text-white mt-1 px-3 flex justify-center items-center gap-1 text-xl rounded border-2 border-transparent  h-full  hover:border-[#174978] hover:bg-transparent hover:text-[#174978]"
                  >
                    <span>visit </span>{" "}
                    <GoArrowUpRight className="text-2xl font-bold" />
                  </a>
                </span>
              </div>
            </div>

            {/* card 2 */}
            <div className="rounded  p-2 border col-span-1 h-full project project2">
              <div>
                <img
                  src="/project2.png"
                  alt=""
                  className="w-full bg-slate-400 h-48"
                />
              </div>
              <div>
                <p className="text-xl text-main-color">Ecomvally</p>
                <p className="text-sm text-gray-400">
                  Amazon consultant Agency!
                </p>
                 <span>
                  {" "}
                  <a
                    href="https://swankwearr.com/"
                    target="blank"
                    className="bg-[#174978] text-white mt-1 px-3 flex justify-center items-center gap-1 text-xl rounded border-2 border-transparent  h-full  hover:border-[#174978] hover:bg-transparent hover:text-[#174978]"
                  >
                    <span>visit </span>{" "}
                    <GoArrowUpRight className="text-2xl font-bold" />
                  </a>
                </span>
              </div>
            </div>

            {/* card 3 */}
            <div className="rounded  p-2 border col-span-1 h-full project project3">
              <div>
                <img
                  src="/project3.png"
                  alt=""
                  className="w-full bg-slate-400 h-48"
                />
              </div>
              <div>
                <p className="text-xl text-main-color">Celeberale</p>
                <p className="text-sm text-gray-400">Its my SEO project!</p>

                 <span>
                  {" "}
                  <a
                    href="https://swankwearr.com/"
                    target="blank"
                    className="bg-[#174978] text-white mt-1 px-3 flex justify-center items-center gap-1 text-xl rounded border-2 border-transparent  h-full  hover:border-[#174978] hover:bg-transparent hover:text-[#174978]"
                  >
                    <span>visit </span>{" "}
                    <GoArrowUpRight className="text-2xl font-bold" />
                  </a>
                </span>
               
                   
                   
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
