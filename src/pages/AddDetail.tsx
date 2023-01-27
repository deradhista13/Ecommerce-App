import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { useTitle } from "../utils/UseTitle";

const AddDetail = () => {
  useTitle("BaggioShop - Tambah Product Baru");
  const [productName, setProductName] = useState<string>("");
  const [productImage, setProductImage] = useState<any>({});
  const [description, setDescription] = useState<string>("");
  const [stok, setStok] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [importantInfo, setImportantInfo] = useState<string>("");
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie.token) {
      navigate("/add_product_detail");
    }
  }, [cookie.token]);

  function AddProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", productName);
    formData.append("product", productImage);
    formData.append("description", description);
    formData.append("stok", stok.toString());
    formData.append("price", price.toString());
    formData.append("important_info", importantInfo);
    axios
      .post("https://baggioshop.site/products", formData, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })

      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Berhasil Menambahkan Product",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/add_product_detail");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Gagal Menambahakan Product!",
        });
      });
  }
  return (
    <Layout>
      <h3 className="m-10 ml-10 font-bold text-lg">Tambah Product Baru</h3>
      <form
        className="flex flex-row m-5 justify-center"
        onSubmit={(e) => AddProduct(e)}
      >
        <div className="mx-10">
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#38E54D]">
              Upload Foto Product
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-[#38E54D]  w-full max-w-md"
              onChange={(e) => {
                if (!e.currentTarget.files) {
                  return;
                }
                setProductImage(e.currentTarget.files[0]);
              }}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#38E54D]">Nama Product</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/2"
              type="text"
              placeholder="Nama Product"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#38E54D]">Stok</label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/2"
              type="number"
              placeholder="0"
              onChange={(e) => {
                setStok(e.target.valueAsNumber);
              }}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#38E54D]">
              Harga Product
            </label>
            <input
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/2"
              type="number"
              placeholder="250000"
              onChange={(e) => {
                setPrice(e.target.valueAsNumber);
              }}
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
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-[#38E54D]">
              Informasi Product
            </label>
            <textarea
              className="rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-3/2"
              placeholder="informasi product"
              onChange={(e) => {
                setImportantInfo(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row">
            <Link to="/add_product">
              <Button
                label="Kembali"
                buttonSet="w-48 text-[#38E54D] btn-outline my-3 mr-10"
              />
            </Link>
            <Button
              type="submit"
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
