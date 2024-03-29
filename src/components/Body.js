import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Body = () => {

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const jsondata = await data.json();
    console.log(jsondata);

    setProducts(jsondata?.products);
  }
  console.log(Products);
  return (
    <div className="product-cards">
      {
        Products.map((item) => (<ProductCard key={item.id} itemData={item} />))
      }
    </div>
  )
}

export default Body;