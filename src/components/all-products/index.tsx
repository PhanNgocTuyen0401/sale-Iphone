import React from "react";
import { products } from "../hot-type-products/fakeData";
import ProductCard from "../hot-products/productCard";
import { IProduct } from "../hot-type-products/homeTypeProduct.interfake";

const AllProducts = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-8">
        {products.map((item: IProduct, index: number) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
