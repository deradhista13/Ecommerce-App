import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";

export interface ProductType {
  id?: number;
  product_name?: string;
  product_image?: string;
  description?: string;
  qty?: number;
  price?: number;
  onClick?: () => void;
}

const Cart = () => {
  const [product, setProduct] = useState<ProductType[]>([]);
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
    const getProduct = localStorage.getItem("AddCart");
    if (getProduct) {
      setProduct(JSON.parse(getProduct));
    }
  }

  function deleteProduct(data: ProductType) {
    let dupeProduct: ProductType[] = product.slice();
    const filterData = dupeProduct.filter((item) => item.id !== data.id);

    localStorage.setItem("AddCart", JSON.stringify(filterData));
    alert(`Delete ${data.product_name} from favorite list`);
  }

  return (
    <Layout>
      <h3 className="m-5 ml-10 font-bold text-lg">My Shoping Cart</h3>
      <div className="overflow-x-auto w-full mx-5 my-5">
        <table className="table w-full items-center">
          {product.map((product) => (
            <tbody>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox ml-10" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="mask mask-squircle w-32 h-32">
                      <img src={product.product_image} alt="product" />
                    </div>
                    <div>
                      <div className="font-bold">{product.product_name}</div>
                      <div className="text-sm opacity-50 pb-10">
                        {product.description?.substring(0, 20) + "..."}
                      </div>
                      <button
                        className="btn btn-outline text-[#ED2F2F] btn-sm lowercase opacity-80"
                        onClick={() => deleteProduct(product)}
                      >
                        hapus
                      </button>
                    </div>
                  </div>
                </td>
                <td></td>

                <th>
                  {product.price}
                  <br />
                  Qty:
                  <br />
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
                </th>
              </tr>
            </tbody>
          ))}
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
          onClick={() => navigate("/")}
        />
        <Button
          label="Checkout"
          buttonSet="w-48 text-white bg-[#38E54D] border-none my-3 mr-10"
          onClick={() => navigate("/checkout")}
        />
      </div>
    </Layout>
  );
};

export default Cart;
