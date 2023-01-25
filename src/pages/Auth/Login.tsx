import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import axios from "axios";

import illustration from "../../assets/illustration.svg";
import logo from "../../assets/logo.svg";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();

  function authLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post("http://13.215.177.62/login", {
        email: email,
        password: pass,
      })
      .then((res) => {
        const { token } = res.data;
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Berhasil Login",
          showConfirmButton: false,
          timer: 1500,
        });
        setCookie("token", token);
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login Gagal, email/password salah!",
        });
      });
  }

  return (
    <div>
      <div className="flex justify-center m-5">
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-row">
        <div className="flex item-center basis-1/2 p-10">
          <img src={illustration} alt="img" />
        </div>
        <div className="basis-1/2 p-10">
          <div className="w-auto p-20 shadow-lg bg-white rounded-lg">
            <form className="w-[90%]" onSubmit={(e) => authLogin(e)}>
              <h2 className="text-3xl text-black text-center font-bold">
                Login
              </h2>
              <div className="mt-3">
                <label className="block text-[#38E54D] font-semibold text-md md:text-left mb-1 md:mb-0 pr-4 pb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14"
                  placeholder="example@mail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mt-3">
                <label className="block text-[#38E54D] font-semibold text-md md:text-left mb-1 md:mb-0 pr-4 pb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14"
                  placeholder="password"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col py-2">
                <button
                  type="submit"
                  className="shadow bg-[#38E54D] hover:bg-[#38E54D] focus:shadow-outline focus:outline-none text-white font-bold my-2 py-3 px-12 rounded-lg"
                >
                  Login
                </button>
                <div className="flex justify-center underline py-2">
                  <Link to="/register">
                    <p className="text-[#38E54D] hover:text-[#38E54D] font-semibold text-sm">
                      Register
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
