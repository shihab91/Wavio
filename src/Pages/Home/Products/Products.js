import { Button, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Product from "../../Shared/product/product";
import { useHistory } from "react-router";
const Products = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dry-springs-50521.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container sx={{ mb: 10, mt: 7 }}>
      <Product products={products} sliceNumber={6}></Product>
      <Button
        variant="contained"
        sx={{
          backgroundImage: "var(--button-bg)",
          borderRadius: "25px",
          p: "8px 40px",
          mt: 5,
          fontSize: "17px",
          fontWeight: 600,
        }}
        onClick={() => history.push("/explore")}
      >
        {" "}
        View More <ArrowForwardIcon />{" "}
      </Button>
    </Container>
  );
};

export default Products;
