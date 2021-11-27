import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Product from "../../Shared/product/product";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dry-springs-50521.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container sx={{ my: 10 }}>
      {products.length ? (
        <Product products={products} sliceNumber={products.length}></Product>
      ) : (
        <CircularProgress sx={{ mt: 50 }} />
      )}
    </Container>
  );
};

export default AllProducts;
