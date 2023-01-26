import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "../pages";
import AddDetail from "../pages/AddDetail";
import AddProdukPage from "../pages/AddProdukPage";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Cart from "../pages/Cart";
import CheckoutProduk from "../pages/CheckoutProduk";
import DetailProduk from "../pages/DetailProduk";
import HistoryPembelian from "../pages/HistoryPembelian";
import Profile from "../pages/Profile";
import Transaksi from "../pages/Transaksi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/add_product",
    element: <AddProdukPage />,
  },
  {
    path: "/detail_product/:id_product",
    element: <DetailProduk />,
  },
  {
    path: "/checkout",
    element: <CheckoutProduk />,
  },
  {
    path: "/history_pembelian",
    element: <HistoryPembelian />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/transaksi_jual",
    element: <Transaksi />,
  },
  {
    path: "/add_product_detail",
    element: <AddDetail />,
  },
  {
    path: "/transaksi_beli",
    element: <HistoryPembelian />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
