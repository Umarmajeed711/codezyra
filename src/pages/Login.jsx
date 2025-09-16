import { useFormik } from "formik";
import * as yup from "yup";
import "../App.css";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { GlobalContext } from "../context/Context";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Alert from "@mui/material/Alert";
import { Link, useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import api from "../components/api";

const Login = () => {
  const navigate = useNavigate();
  let { state, dispatch } = useContext(GlobalContext);

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setloading] = useState(false);

  const [apiError, setApiError] = useState("");

  const PasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  const loginValidation = yup.object({
    email: yup.string().trim().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,

    onSubmit: async (values) => {
      setloading(true);

      try {
        let response = await api.post(`/auth/login`, {
          email: values.email,
          password: values.password,
        });

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
          title: "Login Successfully",
        });

        loginFormik.resetForm();
        dispatch({ type: "ADMIN_LOGIN", payload: response?.data.user });
        console.log("response" , response);
        navigate("/Dashboard");
      } catch (error) {
        setloading(false);
        setApiError(error?.response.data.message || "Something went wrong");
      }
    },
  });

  let Styles = {
    inputField:
      "border-b-2  bg-transparent p-1 outline-none focus:drop-shadow-xl  w-[230px]",
  };
  return (
    <div className="flex justify-center items-center pageHeight overflow-hidden bg-slate-100">
       
      <div className=" flex justify-center items-center  gap-20  p-12  relative  ">
       
       


        {/* Login form */}

        <div className="bg-[rgba(255,255,255,0.95)] relative p-4 shadow-[#174978] shadow-xl">
           <div className="absolute top-0 left-0 p-3 hover:text-[#174978] hidden sm:block">
            <Link to={"/"}><FaArrowLeftLong/></Link>
          </div>

          <div className="h-[40px] w-full flex justify-center items-center mb-2 overflow-hidden">
            <Alert
              severity="error"
              className={`transition-all duration-300 transform text-sm px-4 py-1 max-w-[350px]
      ${
        apiError
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }
    `}
            >
              {apiError || "placeholder"}
            </Alert>
          </div>

          <div className="sm:hidden hover:text-[#174978]">
            <Link to={"/isLogin"}><FaArrowLeftLong/></Link>
          </div>

          <form
            onSubmit={loginFormik.handleSubmit}
            className=" p-6   flex flex-col justify-center  max-w-[350px]"
          >
            <p className="text-3xl text-center font-bold "> <span className="border-[#174978] border-b-4 ">Log in </span>to Codezyra</p>
            <p className="py-2 text-center mt-3 text-gray-500">
              Welcome back! Sign in using your  email account to
              continue us
            </p>

           
            <div className="flex flex-col justify-center gap-3 my-3">
              <div className="flex gap-3 items-center">
                <label htmlFor="email">
                  <span className="text-xl font-bold">
                    <MdEmail />
                  </span>
                </label>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={loginFormik.values.email}
                    onChange={(e) => {
                      loginFormik.handleChange(e);
                      setApiError(""); // clear backend error
                    }}
                    disabled={loading}
                    className={Styles.inputField}
                  />

                  {loginFormik.touched.email &&
                  Boolean(loginFormik.errors.email) ? (
                    <p className="requiredError">
                      {loginFormik.touched.email && loginFormik.errors.email}
                    </p>
                  ) : (
                    <p className="ErrorArea">Error Area</p>
                  )}
                </div>
              </div>

              <div
                className="flex gap-3 items-center"
                style={{ position: "relative" }}
              >
                <label htmlFor="password">
                  <span className="text-xl font-bold">
                    <RiLockPasswordFill />
                  </span>
                </label>
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    maxLength={32}
                    value={loginFormik.values.password}
                    onChange={(e) => {
                      loginFormik.handleChange(e);
                      setApiError(""); // clear backend error
                    }}
                    disabled={loading}
                    className={Styles.inputField}
                  />

                  <p
                    onClick={PasswordVisible}
                    style={{
                      position: "absolute",
                      right: "0",
                      top: "0",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </p>

                  {loginFormik.touched.password &&
                  Boolean(loginFormik.errors.password) ? (
                    <p className="requiredError">
                      {loginFormik.touched.password &&
                        loginFormik.errors.password}
                    </p>
                  ) : (
                    <p className="ErrorArea">Error Area</p>
                  )}
                </div>
              </div>
            </div>

              {/* login button */}
            <div className="flex justify-between items-center">
              <button
                disabled={loading}
                className=" bg-[#174978] w-full transition-all duration-200 flex justify-center rounded px-3 py-2 my-4 text-white  hover:shadow-[#174978] hover:shadow-md"
                type="submit"
              >
                {loading ? (
                  <div className="flex items-center px-1 py-2 gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                  </div>
                ) : (
                  "Log In"
                )}
              </button>

              
            </div>

                {/* forget button */}
            <div className="flex justify-center">
                <Link
                  to="/forget-password"
                  className="text-[##174978] hover:text-[#095aa7]"
                >
                  Forgot Password?
                </Link>
              </div>

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;