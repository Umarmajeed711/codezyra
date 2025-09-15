import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "../App.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";
import { useRef } from "react";
import Swal from "sweetalert2";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".contactForm", {
      xPercent: -20,
      opacity: 0,
      scrollTrigger: {
        trigger: ".contactForm",
        start: "top 50%",
        end: "top 50%",
        scroll: -1,
      },
    });
  });



  const [loading, setloading] = useState(false)

  const formRef = React.useRef(null); // reference to native HTML form

  const contactValidation = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().email().required("Email is required"),
    message: yup.string().required("message is required"),
  });

  const contactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactValidation,

    onSubmit: (values) => {
      console.log(values);

      setloading(true)
      // Trigger native HTML form submission

      formRef.current.submit();

      // Simulate form submit (API call, FormSubmit, etc.)
      setTimeout(() => {
        setloading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Thanks for Contact us",
        });

        contactFormik.resetForm();
      }, 1000); // Simulated 2-second delay


    },
  });

  return (
    <div className="contact-background theme-background" id="Contact">
      <div className="flex h-full flex-col items-center mx-4 md:mx-8 lg:mx-10 p-4 lg:p-8 ">
        <div className="flex justify-center items-center flex-col">
          <p className="text-3xl md:text-4xl headings lg:text-[70px]">Contact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20  my-10 px-2">
          <div className="col-span-1 flex flex-col gap-10 justify-evenly  ">
            <div className="w-full">
              <p className="text-xl md:text-3xl font-medium poppins text-center md:text-start">
                Get In Touch
              </p>
              <p className="text-[16px]  poppins text-center md:text-justify">
                We are very approachable and would love to speak to you. Feel free
                to call us and send an email . Follow us on social media platforms or simply
                complete the enquiry form.
              </p>
            </div>

            <div className="flex  gap-20 justify-center items-center ">
              <div className="flex gap-5 flex-col">
                <div className="flex items-center gap-4 ">
                  <div>
                    <a
                      href="https://wa.me/+92162402815?text=Hi%20there%2C%20I%20want%20to%20hire%20you%20for%20a%20project"
                      target="_blank"
                    >
                      {/* <FaWhatsapp className="w-10 h-10 icons " /> */}
                      <img src="./whatsapp.png" className="w-10 h-10 icons " />
                    </a>
                  </div>
                  <div>whatsapp</div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <a
                      href="https://www.linkedin.com/"
                      target="blank"
                    >
                      {/* <FaLinkedinIn className="w-10 h-10 icons" /> */}
                      <img src="./linkedin.png" className="w-10 h-10 icons " />
                    </a>
                  </div>
                  <div>LinkedIn</div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <a
                      href="https://www.instagram.com"
                      target="blank"
                    >
                      {" "}
                      <img src="./instagram.png" className="w-10 h-10 icons " />
                    </a>
                  </div>
                  <div>Instagram</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 poppins text-xl  font-light flex justify-center  ">
            {/* Send message form */}
            <form
              action="https://formsubmit.co/abc@gmail.com"
              method="POST"
              ref={formRef}
              onSubmit={contactFormik.handleSubmit}
              className=" flex flex-col gap-2 p-5 rounded-2xl form-background w-80  contactForm"
            >
              <div className="text-xl ">Contact Us</div>

              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="name">Name</label>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    value={contactFormik.values.name}
                    onChange={contactFormik.handleChange}
                    className="inputField"
                  />

                  {contactFormik.touched.name &&
                    Boolean(contactFormik.errors.name) ? (
                    <p className="requiredError">
                      {contactFormik.touched.name && contactFormik.errors.name}
                    </p>
                  ) : (
                    <p className="ErrorArea">Error Area</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="email">Email</label>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={contactFormik.values.email}
                    onChange={contactFormik.handleChange}
                    className="inputField"
                  />

                  {contactFormik.touched.email &&
                    Boolean(contactFormik.errors.email) ? (
                    <p className="requiredError">
                      {contactFormik.touched.email &&
                        contactFormik.errors.email}
                    </p>
                  ) : (
                    <p className="ErrorArea">Error Area</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="message">Message</label>
                <div>
                  {/* <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Your message"
                    value={contactFormik.values.message}
                    onChange={contactFormik.handleChange}
                    className="inputField "
                  /> */}

                  <textarea name="message"
                    id="message"
                    placeholder="Your message"
                    value={contactFormik.values.message}
                    onChange={contactFormik.handleChange}
                    className="inputField " >


                  </textarea>

                  {contactFormik.touched.message &&
                    Boolean(contactFormik.errors.message) ? (
                    <p className="requiredError">
                      {contactFormik.touched.message &&
                        contactFormik.errors.message}
                    </p>
                  ) : (
                    <p className="ErrorArea">Error Area</p>
                  )}
                </div>
              </div>

              {/* Optional hidden fields */}
              <input
                type="hidden"
                name="_subject"
                value="New Message from Portfolio!"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://appname" />

              <div className="bg-[#174978] p-2 rounded text-center text-white text-sm font-medium   cursor-pointer">
                <button type="submit" disabled={loading} className="hover:animate-pulse">
                  {loading ? (
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-2 h-2 bg-black rounded-full animate-bounce"></span>
                    </div>
                  ) : (
                    "Send message"
                  )}

                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
