import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Layout from "../layout";
import Products from "../pages/products";
import ProductDetail from "../pages/products-detail/index";
import Payment from "../pages/payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/product-detail/:productId",
        element: <ProductDetail />
      },
      {
        path: "/payment/:productId",
        element: <Payment />
      },
    ]
  }
]);
