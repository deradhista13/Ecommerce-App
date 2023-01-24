import React from "react";
import barang2 from "../assets/barang_2.png";

const CardHistory = () => {
  return (
    <div>
      <div className="flex shadow-lg bg-white rounded-xl p-5 gap-5 justify-between my-10 ">
        <div className="">
          <img className="rounded-lg" src={barang2} alt="" />
        </div>
        <div className="basis-1/4 text-left">
          <h4 className="font-bold">Nama Product</h4>
          <p>Keterangan Produk</p>
          <p>Qyt: 1</p>
          <button type="submit" className="border-2 border-[#38E54D] bg-white text-[#38E54D] px-1 py-1 w-36 mt-4 rounded-md hover:bg-[#38E54D] hover:text-white font-semibold">
            <i className="fa-solid fa-right-to-bracket"></i>Selesai
          </button>
        </div>
        <div className="basis-1/2 text-right">
          <h4 className="font-bold">Rp. 250.000</h4>
          <button type="submit" className="border-2 border-[#38E54D] bg-[#38E54D] text-white px-1 py-1 w-36 mt-16 rounded-md hover:bg-white hover:text-[#38E54D] font-semibold">
            <i className="fa-solid fa-right-to-bracket"></i>Beli Lagi
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHistory;
