import React from "react";
import Button from "../components/Button";
import { CardProfil } from "../components/Card";
import Layout from "../components/Layout";

const Profile = () => {
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
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="h-1/2">
                  <div className="mx-auto my-5 flex justify-center">
                    <h1 className="text-2xl text-black font-bold">
                      Nama Pengguna
                    </h1>
                  </div>
                  <div className="mx-auto my-5 flex justify-center">
                    <p className="text-md text-black">@Username</p>
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
                  Upload Foto Profil
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-[#38E54D]  w-full max-w-md"
                />
                <label className="font-semibold text-[#38E54D] pt-2">
                  Full Name
                </label>
                <input
                  className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="font-semibold text-[#38E54D]">Email</label>
                <input
                  className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                  type="email"
                  placeholder="Example@mail.com"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="font-semibold text-[#38E54D]">Username</label>
                <input
                  className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                  type="text"
                  placeholder="username"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="font-semibold text-[#38E54D]">
                  Date of Birth
                </label>
                <input
                  className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                  type="text"
                  placeholder="13 Januuari 2023"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="font-semibold text-[#38E54D]">
                  Phone Number
                </label>
                <input
                  className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/4"
                  type="text"
                  placeholder="0812345678"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-row">
            <Button
              label="Kembali"
              buttonSet="w-48 text-[#38E54D] btn-outline my-3 ml-10"
            />
            <Button
              label="Update Profil"
              buttonSet="w-48 text-white bg-[#38E54D] border-none my-3 ml-10"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
