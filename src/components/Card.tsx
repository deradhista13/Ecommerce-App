import React, { FC } from "react";
import Button from "./Button";

interface CardProps {
  name?: string;
  image?: string;
  deskrip?: string;
  harga?: string;
}

export const CardList: FC<CardProps> = () => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl mx-2">
      <figure className="mt-5 mx-5">
        <img
          src="https://i.pinimg.com/564x/4f/80/eb/4f80eb5606a1643ee0bdc4e977dadf73.jpg"
          alt="Shoes"
          className="rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Nama Product</h2>
        <p className="text-sm">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <h3 className="font-bold">Rp.250.000</h3>
        <div className="card-actions justify-end mt-5">
          <Button
            label="add to cart"
            buttonSet="btn-sm w-32 text-[#38E54D] btn-outline"
          />
        </div>
      </div>
    </div>
  );
};
