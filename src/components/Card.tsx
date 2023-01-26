import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface CardProps {
  id?: number;
  product_name?: string;
  product_image?: string;
  description?: string;
  qty?: number;
  price?: number;
  onClickCart?: () => void;
  onClick?: () => void;
  navigate?: any;
}

export const CardList: FC<CardProps> = ({
  id,
  product_name,
  product_image,
  description,
  price,
  onClick,
}) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/detail_product/${id}`);
  }

  return (
    <div className="card w-72 bg-base-100 shadow-xl mx-2">
      <figure className="mt-5 mx-5">
        <img src={`${product_image}`} alt="product" className="rounded-lg" />
      </figure>
      <div className="card-body">
        <h2
          className="card-title cursor-pointer"
          onClick={() => onClickDetail()}
        >
          {product_name}
        </h2>
        <p className="text-sm">{description}</p>
        <h3 className="font-bold">Rp. {price}</h3>
        <div className="card-actions justify-end mt-5">
          <Button
            label="add to cart"
            buttonSet="btn-sm w-32 text-[#38E54D] btn-outline"
            onClick={() => navigate("/checkout")}
          />
        </div>
      </div>
    </div>
  );
};
