import React from "react";
import illustration from "../assets/illustration.svg";
import FormLogin from "../components/FormLogin";
import logo from "../assets/logo.svg";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-row">
        <div className="flex item-center basis-1/2 p-10">
          <img src={illustration} alt="img" />
        </div>
        <div className="basis-1/2 p-10">
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
