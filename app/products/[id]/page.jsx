"use client";
import Pagination from "@/app/components/Pagination";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

function ProductDetails() {
  const params = useParams();
  const router = useRouter();

  function getProducts(params) {
    const response = axios
      .get(`http://localhost:3000/api/products/${params}`)
      .then((item) => {
        console.log(item.data);
      });
  }
  return (
    <section className="container mx-auto min-h-screen">
      <h1 className="mb-10 text-4xl">product details</h1>
      <Pagination />
    </section>
  );
}

export default ProductDetails;
