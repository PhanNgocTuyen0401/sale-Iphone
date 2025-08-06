import React from "react";
import HomeBanner from "../../components/home-banner";
import Brand from "../../components/brand";
import HotProducts from "../../components/hot-products";
import HomePromotion from "../../components/home-promotion";
import HomeTypeProducts from "../../components/hot-type-products";
import Payment from "../payment";

const Home = () => {
    return (
         <div className="max-w-7xl mx-auto">
            <HomeBanner />
            <Brand />
            <HotProducts />
            <HomePromotion />
            <HomeTypeProducts />
        </div>
    )
}

export default Home;