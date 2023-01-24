import React from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.svg";
import { FiRepeat, FiShoppingBag, FiShoppingCart, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-28 py-2">
        <h1 className="w-fit">
          <a href="">
            <img src={logo} width="60px" alt="logo-nav" />
          </a>
        </h1>

        <div className="flex bg-gray-100 p-2 w-96 space-x-4 rounded-full items-center justify-between">
          <input className="bg-gray-100 outline-none" type="text" placeholder="Search" />
          <a href="">
            <FiSearch size={20} />
          </a>
        </div>

        <div className="w-fit flex justify-end items-center gap-10">
          <a href="">
            <FiRepeat size={20} />
          </a>
          <a href="">
            <FiShoppingBag size={20} />
          </a>
          <a href="">
            <FiShoppingCart size={20} />
          </a>
          <a href="">
            <img src={avatar} className="rounded-full" width="30px" alt="" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
