import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";

const Cart = () => {
  return (
    <Layout>
      <h3 className="m-5 ml-10 font-bold text-lg">My Shoping Cart</h3>
      <div className="overflow-x-auto w-full mx-5 my-5">
        <table className="table w-full items-center">
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox ml-10" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="mask mask-squircle w-32 h-32">
                    <img
                      src="https://i.pinimg.com/564x/4f/80/eb/4f80eb5606a1643ee0bdc4e977dadf73.jpg"
                      alt="product"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Nama Produk</div>
                    <div className="text-sm opacity-50 pb-10">Keterangan</div>
                    <button className="btn btn-outline text-[#ED2F2F] btn-sm lowercase opacity-80">
                      hapus
                    </button>
                  </div>
                </div>
              </td>
              <td></td>

              <th>
                Rp.250.000
                <br />
                Qty:
                <br />
                <div className="btn-group btn-group-horizontal pt-3">
                  <button className="btn btn-sm btn-outline ">-</button>
                  <button className="btn btn-sm btn-outline ">2</button>
                  <button className="btn btn-sm btn-outline ">+</button>
                </div>
              </th>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox ml-10" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="mask mask-squircle w-32 h-32">
                    <img
                      src="https://i.pinimg.com/564x/4f/80/eb/4f80eb5606a1643ee0bdc4e977dadf73.jpg"
                      alt="product"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Nama Produk</div>
                    <div className="text-sm opacity-50 pb-10">Keterangan</div>
                    <button className="btn btn-outline text-[#ED2F2F] btn-sm lowercase opacity-80">
                      hapus
                    </button>
                  </div>
                </div>
              </td>
              <td></td>

              <th>
                Rp.250.000
                <br />
                Qty:
                <br />
                <div className="btn-group btn-group-horizontal pt-3">
                  <button className="btn btn-sm btn-outline ">-</button>
                  <button className="btn btn-sm btn-outline ">2</button>
                  <button className="btn btn-sm btn-outline ">+</button>
                </div>
              </th>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox ml-10" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="mask mask-squircle w-32 h-32">
                    <img
                      src="https://i.pinimg.com/564x/4f/80/eb/4f80eb5606a1643ee0bdc4e977dadf73.jpg"
                      alt="product"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Nama Produk</div>
                    <div className="text-sm opacity-50 pb-10">Keterangan</div>
                    <button className="btn btn-outline text-[#ED2F2F] btn-sm lowercase opacity-80">
                      hapus
                    </button>
                  </div>
                </div>
              </td>
              <td></td>

              <th>
                Rp.250.000
                <br />
                Qty:
                <br />
                <div className="btn-group btn-group-horizontal pt-3">
                  <button className="btn btn-sm btn-outline ">-</button>
                  <button className="btn btn-sm btn-outline ">2</button>
                  <button className="btn btn-sm btn-outline ">+</button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 className="m-5 ml-10 font-bold text-lg">Ringkasan Belanja</h4>
      <div className="flex flex-row m-10 mb-5 justify-between">
        <div className="flex flex-col ml-10">
          <div className="font-md">Total Belaja Produk</div>
          <h4 className="font-bold text-lg">Total Belanja</h4>
        </div>
        <div className="flex flex-col mr-10">
          <div className="font-md">500.000</div>
          <h4 className="font-bold text-lg">500.000</h4>
        </div>
      </div>
      <div className="flex flex-row m-10 mb-5 justify-end">
        <Button
          label="Kembali"
          buttonSet="w-48 text-[#38E54D] btn-outline my-3 mr-10"
        />
        <Button
          label="Checkout"
          buttonSet="w-48 text-white bg-[#38E54D] border-none my-3 mr-10"
        />
      </div>
    </Layout>
  );
};

export default Cart;
