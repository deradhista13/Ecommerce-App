import React from "react";
import illustration from "../assets/illustration.svg";
import FormRegister from "../components/FormRegister";
import logo from "../assets/logo.svg";

const Register = () => {
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
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default Register;
