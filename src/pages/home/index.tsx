import React from "react";
import HomeBanner from "../../components/home-banner";
import Brand from "../../components/brand";
import HotProducts from "../../components/hot-products";
import HomePromotion from "../../components/home-promotion";
import HomeTypeProducts from "../../components/hot-type-products";

const Home = () => {
    return (
        <div className="pt-10">
            <HomeBanner />
            <Brand />
            <HotProducts />
            <HomePromotion />
            <HomeTypeProducts />
        </div>
    )
}

export default Home;