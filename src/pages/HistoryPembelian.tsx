import React from "react";
import CardHistory from "../components/CardHistory";
import Layout from "../components/Layout";
import { useTitle } from "../utils/UseTitle";

const HistoryPembelian = () => {
  useTitle("BaggioShop - History Pembelian");
  return (
    <Layout>
      <div className="w-auto p-20 m-20 bg-white ">
        <div className="">
          <h3 className="font-bold">History Pembelian</h3>
        </div>
        <div className="flex flex-row mt-5 py-5 border-t-2">
          <div className="basis-full text-center">
            <div className="flex tabs justify-between border-b-2 pt-5">
              <a className="tab hover:border-b-2 hover:border-[#38E54D] hover:text-[#38E54D]">
                Semua
              </a>
              <a className="tab hover:border-b-2 hover:border-[#38E54D] hover:text-[#38E54D]">
                Belum Dibayar
              </a>
              <a className="tab hover:border-b-2 hover:border-[#38E54D] hover:text-[#38E54D]">
                Sedang Dikirim
              </a>
              <a className="tab hover:border-b-2 hover:border-[#38E54D] hover:text-[#38E54D]">
                Selesai
              </a>
              <a className="tab hover:border-b-2 hover:border-[#38E54D] hover:text-[#38E54D]">
                Dibatalkan
              </a>
            </div>
            <CardHistory />
            <CardHistory />
            <CardHistory />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HistoryPembelian;
