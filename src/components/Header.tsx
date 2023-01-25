import React from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.svg";
import {
  FiRepeat,
  FiShoppingBag,
  FiShoppingCart,
  FiSearch,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar w-full sticky top-0 bg-white shadow-md flex items-center justify-between px-28 py-2">
        <h1 className="w-fit">
          <Link to="/">
            <img src={logo} width="60px" alt="logo-nav" />
          </Link>
        </h1>

        <div className="flex bg-gray-100 p-2 w-96 space-x-4 rounded-full items-center justify-between">
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder="Search"
          />
          <a href="">
            <FiSearch size={20} />
          </a>
        </div>

        <div className="w-fit flex justify-end items-center gap-10">
          <Link to="/transaksi_beli">
            <FiRepeat size={20} />
          </Link>
          <Link to="/detail_product">
            <FiShoppingBag size={20} />
          </Link>
          <Link to="/cart">
            <FiShoppingCart size={20} />
          </Link>
          <a href="">
            <img src={avatar} className="rounded-full" width="30px" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
