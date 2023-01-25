import React, { useState } from "react";

interface productType {
  id?: number;
  product_name?: string;
  product_image?: any;
  descript?: string;
  qty?: number;
  price?: number;
  important_info?: string;
  user_id?: number;
}

const AddProdukPage = () => {
  const [productName, setProductName] = useState<String>("");
  const [image, setImage] = useState<any>();
  const [price, setPrice] = useState<Number>();
  const [qty, setQty] = useState<Number>();
  const [descript, setDescript] = useState<String>("");
  const [info, setInfo] = useState<String>("");

  function AddProduct(e: React.FormEvent<HTMLFormElement>) {}

  return (
    <div className="w-auto p-20 m-20 bg-white ">
      <div className="flex flex-row items-center pb-10">
        <div className="basis-1/2">
          <h3 className="font-bold">Produk Saya</h3>
        </div>
        <div className="basis-1/2 text-right">
          <button
            type="submit"
            className="border-2 border-[#38E54D] bg-white text-[#38E54D] px-2 py-2 w-44 rounded-md hover:bg-[#38E54D] hover:text-white font-semibold"
          >
            <i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Tambah
            Produk
          </button>
        </div>
      </div>
      <div className="flex flex-row mt-5 px-5 py-5 border-t-2">
        <div className="basis-full text-center">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Nama Produk</th>
                  <th>Kode Barang</th>
                  <th>Harga</th>
                  <th>Stok</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                  <th>1</th>
                  <td>Nama Produk</td>
                  <td>12345</td>
                  <td>Rp.50.000</td>
                  <td>50</td>
                  <td>
                    <a href="#" className="link link-warning">
                      Ubah{" "}
                    </a>
                    <a href="#" className="link link-secondary">
                      Hapus
                    </a>
                  </td>
                </tr>
                {/* <!-- row 2 --> */}
                <tr>
                  <th>2</th>
                  <td>Nama Produk</td>
                  <td>12345</td>
                  <td>Rp.50.000</td>
                  <td>50</td>
                  <td>
                    <a href="#" className="link link-warning">
                      Ubah{" "}
                    </a>
                    <a href="#" className="link link-secondary">
                      Hapus
                    </a>
                  </td>
                </tr>
                {/* <!-- row 3 --> */}
                <tr>
                  <th>3</th>
                  <td>Nama Produk</td>
                  <td>12345</td>
                  <td>Rp.50.000</td>
                  <td>50</td>
                  <td>
                    <a href="#" className="link link-warning">
                      Ubah{" "}
                    </a>
                    <a href="#" className="link link-secondary">
                      Hapus
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProdukPage;
