import React, { useEffect } from "react";
import HomeBanner from "../../components/home-banner";
import Brand from "../../components/brand";
import HotProducts from "../../components/hot-products";
import HomePromotion from "../../components/home-promotion";
import HomeTypeProducts from "../../components/hot-type-products";
import { useUserInfo } from "../../store/useUserInfo";
import { useUserCart } from "../../store";
import axios from "axios";

const Home = () => {
  const { userInfo } = useUserInfo();
  const { setQuantityCart, setProductCart } = useUserCart();

  const getProductsInCart = () => {
    const url = `https://lapshop-be.onrender.com/api/cart/${userInfo?.id}`;
    axios
      .get(url)
      .then(function (response) {
        const totalProducts = response.data?.data?.items?.length;
        const listItems = response.data?.data?.items;
        setQuantityCart(totalProducts);
        setProductCart(listItems);
      })
      .catch(function (error) {
        console.log("THAT BAI", error);
      });
  };

  useEffect(() => {
    if (userInfo) {
      getProductsInCart();
    }
  }, [userInfo]);

  return (
    <div className="max-w-7xl mx-auto">
      <HomeBanner />
      <Brand />
      <HotProducts />
      <HomePromotion />
      <HomeTypeProducts />
    </div>
  );
};

export default Home;
