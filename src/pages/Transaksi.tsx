import React from "react";
import Layout from "../components/Layout";
import { useTitle } from "../utils/UseTitle";

const Transaksi = () => {
  useTitle("BaggioShop - HIstory Transaksi");

  return (
    <Layout>
      <h3 className="m-10 ml-10 font-bold text-lg">
        History Transaksi Penjualan
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full mx-10 mb-10">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Nama Produk</th>
              <th>Qty</th>
              <th>Harga</th>
              <th>Pembeli</th>
              <th>Status Transaksi</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td>Nama Produk</td>
              <td>1</td>
              <td>250.000</td>
              <td>username</td>
              <td>
                <span className="badge badge-ghost badge-md text-[#38E54D] badge-outline">
                  selesai
                </span>
              </td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <td>Nama Produk</td>
              <td>1</td>
              <td>250.000</td>
              <td>username</td>
              <td>
                <span className="badge badge-ghost badge-md text-[#ED2F2F] badge-outline">
                  dibatalkan
                </span>
              </td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <td>Nama Produk</td>
              <td>1</td>
              <td>250.000</td>
              <td>username</td>
              <td>
                <span className="badge badge-ghost badge-md text-[#374266] badge-outline">
                  siap kirim
                </span>
              </td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <td>Nama Produk</td>
              <td>1</td>
              <td>250.000</td>
              <td>username</td>
              <td>
                <span className="badge badge-ghost badge-md text-[#4263EB] badge-outline">
                  pengembalian
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Transaksi;
