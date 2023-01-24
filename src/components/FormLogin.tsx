import React from "react";

const FormLogin = () => {
  return (
    <div className="w-auto p-20 shadow-lg bg-white rounded-lg">
      <h1 className="font-bold">Login</h1>
      <div className="mt-3">
        <label htmlFor="email" className="block text-base text-left mb-2">
          Email
        </label>
        <input type="text" id="email" className="border rounded-lg w-full text-base px-5 py-5 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Email" />
      </div>
      <div className="mt-3">
        <label htmlFor="password" className="block text-base text-left mb-2">
          Password
        </label>
        <input type="password" id="password" className="border rounded-lg w-full text-base px-5 py-5 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Password" />
      </div>
      <div className="mt-20">
        <button type="submit" className="border-2 border-indigo-700 bg-blue-700 text-white px-5 py-5 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">
          <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
        </button>
      </div>
      <div className="mt-5">
        <button type="submit" className="border-2 border-white bg-white text-blue-700 px-5 py-5 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">
          <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Registrasi
        </button>
      </div>
    </div>
  );
};

export default FormLogin;
