import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.svg";
import {
  FiRepeat,
  FiShoppingBag,
  FiShoppingCart,
  FiSearch,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Swal from "sweetalert2";

const Header = () => {
  const [open, setOpen] = useState(false);
  const Menus = ["Profile", "Logout"];

  const [cookie, setCookie, removeCookie] = useCookies<string>([]);
  const [photo, setPhoto] = useState<string>("");
  const navigate = useNavigate();

  function ProfileHandler() {
    axios
      .get("http://baggioshop.site/users/profile", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        const { photo } = res.data.data;
        setPhoto(photo);
      })
      .catch((err) => {});
  }
  useEffect(() => {
    ProfileHandler();
  }, []);

  function logOutHandler() {
    Swal.fire({
      title: "Are you sure want to logout?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        removeCookie("token");
        navigate("/");
        navigate(0);
      }
    });
  }

  return (
    <div>
      <div className="navbar w-full sticky top-0 bg-white shadow-md flex items-center justify-between px-28 py-2">
        <h1 className="w-fit">
          <Link to="/">
            <img src={logo} width="60px" alt="logo-nav" />
          </Link>
        </h1>

        <div className="w-fit flex justify-end items-center gap-10">
          <Link to="/transaksi_beli">
            <FiRepeat size={20} />
          </Link>
          <Link to="/add_product">
            <FiShoppingBag size={20} />
          </Link>
          <Link to="/cart">
            <FiShoppingCart size={20} />
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="flex items-center">
                <img
                  src={
                    cookie.token
                      ? photo
                        ? photo
                        : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      : "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                  }
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-white text-black rounded-box w-52"
            >
              <li>
                {cookie.token ? (
                  <>
                    <div onClick={() => logOutHandler()}>
                      <p>Log Out</p>
                    </div>
                    <Link to="/profile">
                      <p>Profile</p>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={"/login"}>
                      <p>Log in</p>{" "}
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
