import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../components/Layout";
import { ProductType } from "../utils/Type";
import { useTitle } from "../utils/UseTitle";

const AddProdukPage = () => {
  useTitle("BaggioShop - Tambah Product");
  const [product, setProduct] = useState<ProductType[]>([]);
  const { id } = useParams();
  const [productName, setProductName] = useState<string>("");
  const [productImage, setProductImage] = useState<any>({});
  const [description, setDescription] = useState<string>("");
  const [stok, setStok] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [importantInfo, setImportantInfo] = useState<string>("");

  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!cookie.token) {
      navigate("/add_product");
    }
  }, [cookie.token]);

  function fetchData() {
    axios
      .get("https://baggioshop.site/products")
      .then((product) => {
        const { data } = product.data;
        setProduct(data);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  function editProduct(id: number) {
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
        fetchData();
        navigate("/add_product_detail");
      })
      .catch((error) => {});
  }

  function deleteProduct(id: number) {
    axios
      .delete(`https://baggioshop.site/products/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Berhasil Menghapus Product",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Gagal Menghapus Product!",
        });
      });
  }

  return (
    <Layout>
      <div className="w-auto p-20 m-20 bg-white ">
        <div className="flex flex-row items-center pb-10">
          <div className="basis-1/2">
            <h3 className="font-bold">Produk Saya</h3>
          </div>
          <div className="basis-1/2 text-right">
            <Link to="/add_product_detail">
              <button
                type="submit"
                className="border-2 border-[#38E54D] bg-white text-[#38E54D] px-2 py-2 w-44 rounded-md hover:bg-[#38E54D] hover:text-white font-semibold"
              >
                Tambah Produk
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row mt-5 px-5 py-5 border-t-2">
          <div className="basis-full text-center">
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th>Nama Produk</th>
                    <th>Kode Barang</th>
                    <th>Harga</th>
                    <th>Stok</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((product) => (
                    <tr>
                      <td>{product.product_name}</td>
                      <td>{product.id}</td>
                      <td>{product.price}</td>
                      <td>{product.qty}</td>
                      <td>
                        <Link
                          to="/add_product_detail"
                          className="link link-warning"
                          onClick={() => editProduct(product.id!)}
                        >
                          Ubah
                        </Link>
                        <a
                          className="link link-secondary"
                          onClick={() => deleteProduct(product.id!)}
                        >
                          Hapus
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddProdukPage;
