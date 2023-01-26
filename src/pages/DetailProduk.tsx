import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import barang from "../assets/barang.png";
import Layout from "../components/Layout";

export interface ProductType {
  id?: number;
  product_name?: string;
  product_image?: string;
  description?: string;
  qty?: number;
  price?: number;
  important_info?: string;
}

const DetailProduk = () => {
  const { id_product } = useParams();
  const [data, setData] = useState<ProductType>({});
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const incrementCounter = () => setQty(qty + 1);
  let decrementCounter = () => setQty(qty - 1);

  if (qty <= 0) {
    decrementCounter = () => setQty(1);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(`http://baggioshop.site/products/${id_product}`)
      .then((data) => {
        const result = data.data.data; // destructuring
        console.log(result);
        setData(result);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  function handlerCart(data: ProductType) {
    const getProduct = localStorage.getItem("AddCart");

    if (getProduct) {
      let parseProduct: ProductType[] = JSON.parse(getProduct);
      const prodcutExist = parseProduct.find((item) => item.id === data.id);

      if (prodcutExist) {
        alert("Product sudah berada di keranjang");
      } else {
        parseProduct.push(data);
        localStorage.setItem("AddCart", JSON.stringify(parseProduct));
      }
    } else {
      localStorage.setItem("AddCart", JSON.stringify([data]));
    }
    alert("Product berhasil ditambahkan");
  }

  return (
    <Layout>
      <div className="w-auto p-20 m-20 shadow-lg bg-white rounded-xl">
        <div className="flex flex-row justify-between">
          <div className="flex justify-center basis-1/3 rounded-lg">
            <img width="300px" src={data.product_image} alt="" />
          </div>
          <div className="basis-1/2">
            <h2 className="text-3xl font-bold">{data.product_name}</h2>
            <p>{data.description?.substring(0, 50) + "..."}</p>
            <h3 className="text-2xl font-bold mt-3">Rp. {data.price}</h3>
            <div className="btn-group btn-group-horizontal pt-3">
              <button
                className="btn btn-sm btn-outline "
                onClick={decrementCounter}
              >
                -
              </button>
              <button className="btn btn-sm btn-outline ">{qty}</button>
              <button
                className="btn btn-sm btn-outline "
                onClick={incrementCounter}
              >
                +
              </button>
            </div>
            <div className="flex justify-end gap-5 mt-10">
              <Link to="/checkout">
                <button
                  type="submit"
                  className="border-2 border-[#38E54D] bg-[#38E54D] text-white px-2 py-2 w-44 rounded-md hover:bg-transparent hover:text-[#38E54D] font-semibold"
                  onClick={() => handlerCart(data)}
                >
                  Beli Sekarang
                </button>
              </Link>
              <button
                type="submit"
                className="border-2 border-white bg-white text-[#38E54D] px-2 py-2 w-44 rounded-md hover:bg-[#38E54D] hover:text-white font-semibold"
              >
                Add To Chart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-bold">Detail Produk</h2>
          <div className="px-10 py-5">
            <p>{data.description}</p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Informasi Penting</h2>
          <div className="px-10 py-5">
            <p>{data.important_info}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailProduk;
