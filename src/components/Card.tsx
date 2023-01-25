import React, { FC } from "react";
import Button from "./Button";

interface CardProps {
  name?: string;
  image?: string;
  deskrip?: string;
  harga?: number;
}

export const CardList: FC<CardProps> = ({ name, image, deskrip, harga }) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl mx-2">
      <figure className="mt-5 mx-5">
        <img src={`${image}`} alt="Shoes" className="rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm">{deskrip}</p>
        <h3 className="font-bold">Rp. {harga}</h3>
        <div className="card-actions justify-end mt-5">
          <Button label="add to cart" buttonSet="btn-sm w-32 text-[#38E54D] btn-outline" />
        </div>
      </div>
    </div>
  );
};

export const CardProfil: FC<CardProps> = () => {
  return (
    <div className="card w-full bg-white shadow-lg flex flex-col items-center">
      <div className="flex h-1/2">
        <img src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} className="w-[150px] h-[150px] mx-auto mt-16 rounded-full" />
      </div>
      <div className="card-body items-center text-center pt-3">
        <h2 className="card-title text-black font-bold">Nama Pengguna</h2>
        <h3 className="text-black font-medium">@username</h3>
      </div>
    </div>
  );
};
