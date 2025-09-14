import React, { useState } from "react";
import Input from "../components/Input";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import axios from "axios";
import Loader from "../components/Loader";

const ContactSection = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    if (/^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(form.firstName)) {
      if (
        /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(form.lastName)
      ) {
        if (
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
        ) {
          if (/^[A-Za-z0-9\s.,!?'"()-]{10,500}$/.test(form.message)) {
            return true;
          } else {
            setError("Ivalid message, atleast 10 character required.");
          }
        } else {
          setError("Invalid email address");
        }
      } else {
        setError("Invalid last name");
      }
    } else {
      setError("Invalid first name");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setError("");
    try {
      setLoader(true);
      console.log("form data", form);
      const res = await axios.post(
        "http://localhos:6392/api/v1/contact-us",
        form
      );
    } catch (error) {
      
      console.log(error);
    } finally {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setLoader(false);
    }
  };
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-[#0074b7] via-[#11487c] to-[#0074b7]">
      <div className="flex-1 h-full mx-4 md:mx-8 lg:mx-10  p-6 flex flex-col md:flex-row justify-center items-center gap-4 ">
        <div className="flex-1 rounded-2xl shadow-lg bg-[#2B5B81] self-stretch">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="flex flex-col gap-2 ">
              <h2 className="text-center text-3xl text-white font-semibold">
                Send us a message
              </h2>

              <small
                className={`border border-red-500 text-red-400 px-4 text-[14px] ${
                  error ? "visible" : "invisible"
                }`}
              >
                {error}
              </small>
              <div className=" flex gap-4">
                <Input
                  type="text"
                  placeholder={"First name"}
                  name="firstName"
                  value={form.firstName}
                  onChange={changeHandler}
                  styling={"flex-1"}
                />
                <Input
                  type="text"
                  placeholder={"Last name"}
                  name="lastName"
                  value={form.lastName}
                  onChange={changeHandler}
                  styling={"flex-1"}
                />
              </div>
              <Input
                type="email"
                placeholder={"Enter email"}
                name="email"
                value={form.email}
                onChange={changeHandler}
              />
              <div>
                <textarea
                  className="w-full h-40 px-4 py-2 rounded"
                  placeholder="Message"
                  name="message"
                  value={form.message}
                  onChange={changeHandler}
                  required
                ></textarea>
              </div>
            </div>
            <button
              className="w-full py-2 bg-blue-500 flex justify-center text-white hover:bg-blue-600 rounded-lg "
              type="submit"
            >
              {" "}
              {loader ? <Loader /> : "Contact us"}
            </button>
          </form>
        </div>
        <div className="flex-1 self-stretch flex flex-col gap-4 ">
          <div className="flex-1 bg-[#2B5B81] rounded-2xl overflow-hidden">
            <iframe
              title="Codezyra - Gol Market Paposh Karachi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28959.64198797762!2d67.0256695!3d24.9171295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fd7f3d0ed2f%3A0xf9f88e6c0a6f7bb7!2sMehran%20Sweets%2C%20Gole%20Market%20Paposh%2C%20Karachi!5e0!3m2!1sen!2s!4v1694707850000!5m2!1sen!2s"
              className="w-full h-full "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex-2 p   text-start text-[14px] bg-[#2B5B81] rounded-2xl p-4 text-white">
            <h3
              className="mb-3 text-center
             text-[20px]"
            >
              Contact information
            </h3>
            <p className="flex  gap-3  items-center pb-3 ">
              <MdOutlineMailOutline />
              <span>daniyalcodezyratech@gmail.com</span>
            </p>

            <p className="flex gap-3 items-center pb-3 ">
              <LuPhone />
              <span>+923112070329</span>
            </p>
            <p className="flex gap-3 items-center pb-3 ">
              <CiLocationOn />
              <span>Near Mehran sweets gol market paposh, karachi</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
