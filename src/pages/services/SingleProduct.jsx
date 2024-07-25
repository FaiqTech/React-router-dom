import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";

function SingleProduct() {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>Product ID: {product.id}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default SingleProduct;
