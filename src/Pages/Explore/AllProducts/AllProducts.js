import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Product from "../../Shared/product/product";
// import { useHistory } from "react-router-dom";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dry-springs-50521.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container sx={{ my: 10 }}>
      <Product products={products} sliceNumber={10}></Product>
    </Container>
  );
};

export default AllProducts;
