import axios from "axios";
import { useEffect, useState } from "react";
import { CardList } from "../components/Card";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex flex-col my-5 mx-5">
        <div className="my-3">
          <Hero />
        </div>
        <div className="my-3">
          <h3 className="font-bold m-3">Produk Toko Kami</h3>
          <div className="flex flex-row justify-center">
            <CardList />
            <CardList />
            <CardList />
            <CardList />
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
