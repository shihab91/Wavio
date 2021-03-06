import { Card, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import Slider from "react-slick";
import "./review.css";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://dry-springs-50521.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Container sx={{ my: 20 }}>
      <Box>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: "var(--dosis-font )",
            fontWeight: 600,
            mt: 8,
          }}
        >
          WHAT OUR{" "}
          <span style={{ color: "var(--blue-color)" }}>CUSTOMER'S SAY</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "var(--nunito-font)",
            fontSize: "15px",
            mb: 7,
            letterSpacing: "5px",
          }}
        >
          TESTIMONIALS
        </Typography>
      </Box>
      <Slider {...settings} className="review-slider">
        {reviews.map((review) => (
          <Card
            key={review._id}
            sx={{
              maxWidth: "100%",
              mt: 5,
              background:
                "url(https://wavio.b-cdn.net/wp-content/uploads/2020/12/Quotemarks-right-6.png) no-repeat",
              backgroundSize: "60px ",
              backgroundPosition: "730px 70px",
            }}
            className="review-card"
          >
            <Grid
              container
              spacing={3}
              sx={{ p: { xs: "15px 25px", md: "50px 80px" } }}
            >
              <Grid item xs={12} lg={5}>
                <img
                  src={review.image}
                  alt="reviewer img"
                  className="review-img"
                />
              </Grid>
              <Grid item xs={12} lg={7} sx={{ textAlign: "left" }}>
                <Typography
                  variant="h4"
                  sx={{ fontFamily: "var(--nunito-font )", fontWeight: 600 }}
                >
                  {review.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "var(--color)",
                    fontFamily: "var(--nunito-font )",
                    mt: 1,
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  {review.position}
                </Typography>
                <Rating
                  initialRating={review.rating}
                  readonly
                  emptySymbol="far fa-star rating"
                  fullSymbol="fas fa-star rating"
                ></Rating>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "var(--nunito-font )",
                    width: { xs: "90%", md: "70%" },
                    background: "#edf9ff",
                    color: "#081f46",
                    p: "20px 15px",
                    borderRadius: "7px",
                    fontSize: "17px",
                    mt: 2,
                  }}
                >
                  {review.reviewText.slice(0, 170) + "..."}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export default Review;
