import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { CardList } from "../components/Card";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

import { ProductType } from "../utils/Type";
import { useTitle } from "../utils/UseTitle";

const LandingPage = () => {
  useTitle("BaggioShop - Belanja Online");
  const [datas, setDatas] = useState<ProductType[]>([]);
  // const [totalPage, setTotalPage] = useState<number>(1)
  // const [page,setPage] = useState<number>(1)
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!cookie.token) {
      navigate("/");
    }
  }, [cookie.token]);

  function fetchData() {
    axios
      .get("https://baggioshop.site/products")
      .then((data) => {
        const result = data.data.data;
        setDatas(result);
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
      <div className="flex flex-col my-5 mx-5">
        <div className="my-3">
          <Hero />
        </div>
        <div className="my-3">
          <h3 className="font-bold m-3">Produk Toko Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 xl:grid-cols-4 xl:gap-3 m-3">
            {datas.map((data) => (
              <CardList
                key={data.id}
                id={data.id}
                product_name={data.product_name}
                product_image={data.product_image}
                description={data.description?.substring(0, 20) + "..."}
                price={data.price}
                onClickCart={() => handlerCart(data)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="btn-group w-full justify-center my-5">
        <button className="btn text-[#38E54D] btn-outline">«</button>
        <button className="btn text-[#38E54D] btn-outline">1</button>
        <button className="btn text-white btn-outline bg-[#2B7A0B]">2</button>
        <button className="btn text-[#38E54D] btn-outline">3</button>
        <button className="btn text-[#38E54D] btn-outline">4</button>
        <button className="btn text-[#38E54D] btn-outline">»</button>
      </div>
    </Layout>
  );
};

export default LandingPage;
