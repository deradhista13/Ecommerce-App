import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

const AddDetail = () => {
  return (
    <Layout>
      <h3 className="m-10 ml-10 font-bold text-lg">Tambah Product Baru</h3>
      <form className="flex flex-row m-5 justify-center">
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#38E54D]">
              Upload Foto Profil
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-[#38E54D]  w-full max-w-md"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#38E54D]">Nama Product</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/2"
              type="text"
              placeholder="Nama Product"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#38E54D]">Stok</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/2"
              type="number"
              placeholder="0"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#38E54D]">
              Harga Product
            </label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/2"
              type="number"
              placeholder="250.000"
            />
          </div>
        </div>
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#38E54D]">
              Deskripsi Product
            </label>
            <textarea
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/2"
              placeholder="Deskripsi product"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#38E54D]">
              Informasi Product
            </label>
            <textarea
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/2"
              placeholder="informasi product"
            />
          </div>
          <div className="flex flex-row">
            <Button
              label="Kembali"
              buttonSet="w-48 text-[#38E54D] btn-outline my-3 mr-10"
            />
            <Button
              label="Tambah Product"
              buttonSet="w-48 text-white bg-[#38E54D] border-none my-3 mr-10"
            />
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default AddDetail;
