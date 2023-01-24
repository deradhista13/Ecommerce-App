import React from "react";
import CardCheckout from "../components/CardCheckout";

const CheckoutProduk = () => {
  return (
    <div className="w-auto p-20 m-20 bg-white ">
      <h3 className="font-bold">Checkout Product</h3>
      <div className="flex flex-row mt-5 p-10 border-t-2 border-b-2">
        <div className="basis-1/2">
          <h4 className="font-bold">Alamat Pengiriman</h4>
          <h4 className="font-bold mt-3">Adhista Dera</h4>
          <p>0812345678910</p>
          <p>Jl. Garuda Jaya no 85B, Tawangmangu RT 04 RW 02 Tawangmangu, Kab. Karanganyar, 57792</p>
        </div>
        <div className="basis-1/2 text-end">
          <button type="submit" className="border-2 border-[#38E54D] bg-white text-[#38E54D] px-2 py-2 w-44 rounded-md hover:bg-[#38E54D] hover:text-white font-semibold">
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Ubah Alamat
          </button>
        </div>
      </div>
      <div className="flex flex-row p-10 border-b-2 my-10">
        <div className="basis-full">
          <h4 className="font-bold mb-5">Product Checkout</h4>
          <CardCheckout />
          <CardCheckout />
        </div>
      </div>
      <div className="flex flex-row p-10 border-b-2 my-10">
        <div className="basis-full">
          <h4 className="font-bold mb-5">Opsi Pengiriman</h4>
          <div className="flex flex-row">
            <div className="basis-1/2">
              <div className="flex gap-5 items-center">
                <input type="checkbox" className="checkbox checkbox-success" />
                <span className="label-text font-bold">Reguler (Rp. 20.000)</span>
              </div>
              <p className="mt-5 ml-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl elit, lacinia eu porta non, dictum ut nisl. Morbi auctor orci id justo congue, eu pretium neque tincidunt.</p>
            </div>
            <div className="basis-1/2">
              <div className="flex gap-5 items-center">
                <input type="checkbox" className="checkbox checkbox-success" />
                <span className="label-text font-bold">Express (Rp. 30.000)</span>
              </div>
              <p className="mt-5 ml-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl elit, lacinia eu porta non, dictum ut nisl. Morbi auctor orci id justo congue, eu pretium neque tincidunt.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-10 my-10">
        <div className="basis-full">
          <h4 className="font-bold mb-5">Ringkasan Belanja</h4>
          <div className="flex flex-row">
            <div className="basis-1/2">Total Belanja Product</div>
            <div className="basis-1/2 text-right">Rp. 500.000</div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/2">Pengiriman</div>
            <div className="basis-1/2 text-right">Rp. 30.000</div>
          </div>
          <div className="flex flex-row mt-5">
            <div className="basis-1/2 font-bold">Total Belanja</div>
            <div className="basis-1/2 text-right font-bold">Rp. 530.000</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row p-10 my-10">
        <div className="basis-full">
          <div className="flex flex-row mt-5 justify-end gap-5">
            <div className="basis-1/4 font-bold">
              <button type="submit" className="border-2 border-red-600 bg-white text-red-600 px-3 py-3 w-full rounded-md hover:bg-transparent hover:text-red-800 font-semibold">
                <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Batal
              </button>
            </div>
            <div className="basis-1/4 text-right font-bold">
              <button type="submit" className="border-2 border-[#38E54D] bg-[#38E54D] text-white px-3 py-3 w-full rounded-md hover:bg-transparent hover:text-[#38E54D] font-semibold">
                <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduk;
