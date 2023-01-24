import React from "react";

const FormRegister = () => {
  return (
    <div>
      <div className="w-auto p-20 shadow-lg bg-white rounded-xl">
        <h1 className="font-bold">Register</h1>
        <div className="mt-3">
          <label htmlFor="nama" className="block text-base text-left mb-2">
            Nama Lengkat
          </label>
          <input type="text" id="nama" className="border rounded-lg w-full text-base px-5 py-5 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Nama Lengkap" />
        </div>
        <div className="mt-3">
          <label htmlFor="email" className="block text-base text-left mb-2">
            Email
          </label>
          <input type="text" id="email" className="border rounded-lg w-full text-base px-5 py-5 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Email" />
        </div>
        <div className="mt-3">
          <label htmlFor="notelp" className="block text-base text-left mb-2">
            Nomor Telepon
          </label>
          <input type="text" id="notelp" className="border rounded-lg w-full text-base px-5 py-5 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Nomor Telepon" />
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="block text-base text-left mb-2">
            Password
          </label>
          <input type="password" id="password" className="border rounded-lg w-full text-base px-5 py-5 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Password" />
        </div>
        <div className="mt-20">
          <button type="submit" className="border-2 border-[#38E54D] bg-[#38E54D] text-white px-5 py-5 w-full rounded-md hover:bg-transparent hover:text-[#38E54D] font-semibold">
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Registrasi
          </button>
        </div>
        <div className="mt-5">
          <button type="submit" className="border-2 border-white bg-white text-[#38E54D] px-5 py-5 w-full rounded-md hover:bg-transparent hover:text-[#38E54D] font-semibold">
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
