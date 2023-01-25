import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import axios from "axios";

import illustration from "../../assets/illustration.svg";
import logo from "../../assets/logo.svg";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  function registerHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post("http://13.215.177.62/register", {
        name: name,
        username: username,
        email: email,
        password: pass,
      })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Register Berhasil",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Register Gagal, inputan tidak sesuai!",
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
          <div className="w-auto p-20 shadow-lg bg-white rounded-xl">
            <form className="w-[90%]" onSubmit={(e) => registerHandler(e)}>
              <h2 className="text-3xl text-black text-center font-bold">
                Register
              </h2>
              <div className="mt-3">
                <label className="block text-[#38E54D] font-semibold text-md md:text-left mb-1 md:mb-0 pr-4 pb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama"
                  className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14"
                  placeholder="Nama Lengkap"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
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
                  Username
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-white appearance-none border-2 border-[#D9D9D9] rounded-2xl w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white h-14"
                  placeholder="(a-z & 0-9)"
                  onChange={(e) => {
                    setUsername(e.target.value);
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
                  Registrasi
                </button>
                <div className="flex justify-center underline py-2">
                  <Link to="/login">
                    <p className="text-[#38E54D] hover:text-[#38E54D] font-semibold text-sm">
                      Login
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

export default Register;
