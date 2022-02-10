import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Rating from "react-rating";
import { useHistory } from "react-router-dom";
import "./product.css";
const AllProducts = ({ products, sliceNumber }) => {
  const history = useHistory();
  const bannerFontStyle = {
    fontFamily: "var(--nunito-font)",
    fontWeight: "600",
  };
  return (
    <>
      <Box sx={{ mb: 4, py: 5 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontFamily: "var(--nunito-font)", fontWeight: 700 }}
        >
          CHOOSE YOUR{" "}
          <span style={{ color: "var(--color)" }}>WATER BOTTLE</span>
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            fontFamily: "var(--nunito-font)",
            fontSize: "20px",
          }}
        >
          WATER BOTTLES WE DELIVER
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {products.slice(0, sliceNumber).map((product) => (
          <Grid key={product._id} item spacing={3} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 325,
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
                  width: "180px",
                  height: "240px",
                }}
                alt=""
              />
              <CardContent>
                <Typography
                  style={bannerFontStyle}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="h5"
                  color="var(--color)"
                  marginTop="10px"
                  marginBottom="10px"
                  style={bannerFontStyle}
                  component="p"
                >
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
                    fontSize: 18,
                    px: 4,
                    py: 0.7,
                    textTransform: "none",
                    mb: 2,
                  }}
                  className="product-card-button button"
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
    </>
  );
};

export default AllProducts;
