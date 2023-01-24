import React from "react";
import barang1 from "../assets/barang_1.png";
import barang2 from "../assets/barang_2.png";

const CardCheckout = () => {
  return (
    <div>
      <div className="flex gap-5 justify-between my-10">
        <div className="">
          <img className="rounded-lg" src={barang1} alt="" />
        </div>
        <div className="basis-1/4">
          <h4 className="font-bold">Nama Product</h4>
          <p>Keterangan Produk</p>
          <p>Qyt: 1</p>
        </div>
        <div className="basis-1/2 text-right">
          <h4 className="font-bold">Rp. 250.000</h4>
        </div>
      </div>
    </div>
  );
};

export default CardCheckout;
