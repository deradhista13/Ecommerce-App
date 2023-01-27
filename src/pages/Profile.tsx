import useCookies from "react-cookie/cjs/useCookies";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import { Modals } from "../components/Modals";
import Layout from "../components/Layout";
import { useTitle } from "../utils/UseTitle";

export interface ProfileTypes {
  id?: number;
  name?: string;
  email?: string;
  username?: string;
  avatar?: any;
  date_of_birth?: string;
  phone_number?: string;
  password?: string;
}

const ProfilePage = () => {
  useTitle("BaggioShop - ProfilPage");
  const [cookie, setCookie, removeCookie] = useCookies<string>([]);
  const [profileData, setProfileData] = useState<ProfileTypes>({});
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<any>({});
  const navigate = useNavigate();

  async function profilHandler() {
    await axios
      .get(`https://baggioshop.site/users/profile`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        const { name, email, username, avatar, date_of_birth, phone_number } =
          res.data.data;
        setProfileData(res.data.data);
        setFullName(name);
        setEmail(email);
        setUserName(username);
        setAvatar(avatar);
        setDateOfBirth(date_of_birth);
        setPhoneNumber(phone_number);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    profilHandler();
  }, []);

  function editProfile() {
    axios
      .put(
        `https://baggioshop.site/users`,
        {
          name: fullName,
          email: email,
          username: userName,
          avatar: avatar,
          date_of_birth: dateOfBirth,
          phone_number: phoneNumber,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Update Succes",
          showConfirmButton: false,
          timer: 1500,
        });
        profilHandler();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Update failed",
        });
      });
  }

  function deleteProfile() {
    axios
      .delete(`https://baggioshop.site/users`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        Swal.fire({
          title: "Are you sure want to delete account?",
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
              text: "Delete successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            removeCookie("token");
            navigate(0);
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Delete account failed",
        });
      });
  }

  useEffect(() => {
    if (!cookie.token) {
      navigate("/");
    }
  }, [cookie.token]);

  const handleChange = (
    value: string | File,
    key: keyof typeof profileData
  ) => {
    let temp = { ...profileData };
    temp[key] = value;
    setProfileData(temp);
  };

  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col w-full bg-dark-alta">
          <div className="flex justify-center py-20 px-10">
            <div className="flex flex-col justify-center w-[400px]">
              <div className="w-full mx-auto rounded-2xl bg-[#e5e5e5] h-[500px] p-8 shadow-2xl">
                <div className="flex h-1/2">
                  <div className="w-[150px] h-[150px] mx-auto mt-16 rounded-full bg-white border-none">
                    <img
                      src={
                        profileData.avatar
                          ? profileData.avatar
                          : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      }
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="h-1/2">
                  <div className="mx-auto my-5 flex justify-center">
                    <h1 className="text-2xl text-[38E54D] font-bold">
                      {profileData.name}
                    </h1>
                  </div>
                  <div className="mx-auto my-5 flex justify-center">
                    <p className="text-md text-[38E54D]">
                      {profileData.username}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex pt-20 pb-4 px-10 justify-center items-center">
            <form className="w-full mx-auto rounded-2xl">
              <div className="flex flex-col py-2">
                <label className="font-semibold text-[#38E54D]">
                  Full Name
                </label>
                <input
                  className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-[38E54D] w-3/4"
                  type="text"
                  placeholder="update profile first"
                  value={profileData.name}
                  disabled
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="font-semibold text-[#38E54D]">Email</label>
                <input
                  className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-[38E54D] w-3/4"
                  type="email"
                  placeholder="update profile first"
                  value={profileData.email}
                  disabled
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="font-semibold text-[#38E54D]">Username</label>
                <input
                  className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-[38E54D] w-3/4"
                  type="text"
                  placeholder="update profile first"
                  value={"@" + profileData.username}
                  disabled
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="font-semibold text-[#38E54D]">
                  Date of Birth
                </label>
                <input
                  className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-[38E54D] w-3/4"
                  type="text"
                  placeholder="update profile first"
                  value={profileData.date_of_birth}
                  disabled
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="font-semibold text-[#38E54D]">
                  Phone Number
                </label>
                <input
                  className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-[38E54D] w-3/4"
                  type="text"
                  placeholder="update profile first"
                  value={profileData.phone_number}
                  disabled
                />
              </div>
            </form>
          </div>

          <label
            htmlFor={`my-modal-1`}
            className={`normal-case text-pink-airbnb bg-transparent`}
          >
            <div className="flex flex-col cursor-pointer">
              <div className="w-1/3 text-lg mx-10 capitalize bg-[#38E54D] border-none shadow-lg text-white font-semibold rounded-lg btn hover:bg-green-800">
                Update Profile
              </div>
            </div>
          </label>
          <Modals
            no={1}
            titleModal={"Update Profile"}
            input1={
              <div className="flex py-2 w-full">
                <label className="font-semibold text-[#38E54D] flex items-center justify-center w-1/3">
                  Picture
                </label>
                <input
                  className="file-input file:bg-[#38E54D] file:rounded-lg file:border-none file:text-white 
                                    text-[#38E54D] rounded-lg border-2 border-[#e5e5e5] bg-white focus:outline-none w-full"
                  type="file"
                  placeholder="Profile Picture"
                  onChange={(e) => {
                    if (!e.currentTarget.files) {
                      return;
                    }
                    setAvatar(e.currentTarget.files[0]);
                    handleChange(e.currentTarget.files[0], "avatar");
                  }}
                />
              </div>
            }
            input2={
              <div className="flex py-2 w-full">
                <label className="font-semibold text-[#38E54D] flex items-center justify-center w-1/3 text-center">
                  Full Name
                </label>
                <input
                  className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-[38E54D] w-full"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            }
            input3={
              <div className="flex py-2 w-full">
                <label className="font-semibold text-[#38E54D] flex items-center justify-center w-1/3 text-center">
                  Email
                </label>
                <input
                  className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-[38E54D] w-full"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            }
            input4={
              <div className="flex py-2 w-full">
                <label className="font-semibold text-[#38E54D] flex items-center justify-center w-1/3 text-center">
                  Username
                </label>
                <input
                  className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-[38E54D] w-full"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            }
            input5={
              <div className="flex py-2 w-full">
                <label className="font-semibold text-[#38E54D] flex items-center justify-center w-1/3 text-center">
                  Date Of Birth
                </label>
                <input
                  className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-[38E54D] w-full"
                  type="text"
                  placeholder="Date Of Birth"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
            }
            input6={
              <div className="flex py-2 w-full">
                <label className="font-semibold text-[#38E54D] flex items-center justify-center w-1/3 text-center">
                  Phone Number
                </label>
                <input
                  className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-[38E54D] w-full"
                  type="text"
                  placeholder="0812xxxxxxxx"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            }
            input8={
              <div className="flex py-2 w-full">
                <label className="font-semibold text-[#38E54D] flex items-center justify-center w-1/3 text-center">
                  Password{" "}
                </label>
                <input
                  className="rounded-lg bg-white border-[#e5e5e5] px-5 p-2 border-2 focus:outline-none text-[38E54D] w-full"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            }
            tombol1={"Cancel"}
            tombol2={"Save"}
            onClick={() => editProfile()}
          />
          <label className={`normal-case text-pink-airbnb bg-transparent mt-3`}>
            <div className="flex flex-col cursor-pointer mb-3">
              <div
                className="w-1/3 text-lg mx-10 capitalize bg-[#38E54D] border-none shadow-lg text-white font-semibold rounded-lg btn hover:bg-green-800"
                onClick={() => deleteProfile()}
              >
                Delete Account
              </div>
            </div>
          </label>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
