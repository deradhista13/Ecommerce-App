import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface CardProps {
  id?: number;
  name?: string;
  image?: string;
  deskrip?: string;
  harga?: number;
  onClickCart?: () => void;
  navigate?: any;
  id_user?: number;
}

export const CardList: FC<CardProps> = ({ id, name, image, deskrip, harga, onClickCart, id_user }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/detail_product/${id}`);
  }

  return (
    <div className="card w-72 bg-base-100 shadow-xl mx-2">
      <figure className="mt-5 mx-5">
        <img src={`${image}`} alt="product" className="rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title cursor-pointer" onClick={() => onClickDetail()}>
          {name}
        </h2>
        <p className="text-sm">{deskrip}</p>
        <h3 className="font-bold">Rp. {harga}</h3>
        <div className="card-actions justify-end mt-5">
          <Button label="add to cart" buttonSet="btn-sm w-32 text-[#38E54D] btn-outline" onClick={onClickCart} />
        </div>
      </div>
    </div>
  );
};
