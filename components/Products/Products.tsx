"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/GenericComponents/Card";

interface Product {
  id: number;
  title: string;
  image: string;
  //   description: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  //   'https://dummyjson.com/products'
  // https://fakestoreapi.com/products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          imageSrc={product.image}
          altText={product.title}
          productName={product.title}
          //   description={product.description}
          onLike={() => console.log(`Liked: ${product.title}`)}
        />
      ))}
    </div>
  );
};

export default Products;
