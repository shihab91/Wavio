import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Rating from "react-rating";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useHistory } from "react-router";
const Products = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dry-springs-50521.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const bannerFontStyle = {
    fontFamily: "var(--dosis-font)",
    fontWeight: "600",
  };

  return (
    <Container sx={{ my: 10 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          gutterBottom
          style={bannerFontStyle}
          sx={{ color: "var(--color)" }}
        >
          CHOOSE YOUR WATER
        </Typography>
        <Typography variant="body1" gutterBottom style={bannerFontStyle}>
          BOTTLES WE DELIVER
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {products.slice(0, 6).map((product) => (
          <Grid key={product._id} item spacing={3} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: 2,
                mx: "auto",
                borderRadius: "20px",
              }}
              className="product-card"
            >
              <img
                src={product.image}
                style={{
                  padding: "15px",
                  objectFit: "contain",
                  width: "200px",
                  height: "300px",
                }}
                alt=""
              />
              <CardContent>
                <Typography
                  style={bannerFontStyle}
                  gutterBottom
                  variant="h5"
                  component="h5"
                >
                  {product.name}
                </Typography>
                <Typography variant="h5" style={bannerFontStyle} component="p">
                  $ {product.price}
                </Typography>
                <Rating
                  initialRating={product.rating}
                  readonly
                  emptySymbol="far fa-star rating"
                  fullSymbol="fas fa-star rating"
                ></Rating>
                <Button
                  sx={{
                    display: "block",
                    mx: "auto",
                    mt: 2,
                    background: "none",
                    color: "black",
                    border: 2,
                    borderColor: "var(--color)",
                    borderRadius: 20,
                    fontSize: 16,
                    px: 4,
                    py: 1,
                  }}
                  onClick={() => {
                    history.push(`/explore/${product._id}`);
                  }}
                >
                  Purchase
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
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
      >
        {" "}
        View More <ArrowForwardIcon />{" "}
      </Button>
    </Container>
  );
};

export default Products;
