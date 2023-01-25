import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "../pages";
import AddProdukPage from "../pages/AddProdukPage";
import Cart from "../pages/Cart";
import CheckoutProduk from "../pages/CheckoutProduk";
import DetailProduk from "../pages/DetailProduk";
import HistoryPembelian from "../pages/HistoryPembelian";
import Profile from "../pages/Profile";

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
    path: "/detail_product",
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
