import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import "./deliveryService.css";
import manImg from "../../../images/Group.png";
import car from "../../../images/car.png";
import calendar from "../../../images/calendar.png";
import clock from "../../../images/clock.png";
import { Link } from "react-router-dom";
const DeliveryService = () => {
  return (
    <Container>
      <div className="delivery-service-wrapper">
        <div className="image">
          <img src={manImg} alt="" />
        </div>
        <div class="texts">
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontFamily: "var(--nunito-font)", fontWeight: 700 }}
          >
            <span style={{ color: "var(--color)" }}>DELIVERY</span>SERVICE
          </Typography>
          <p
            className="description"
            style={{ textAlign: "left", marginLeft: 0 }}
          >
            Our refreshing purified bottled water can now be delivered directly
            to your door with our water delivery service.
          </p>
          <div className="delivery-service-item">
            <img src={car} alt="" width="62px" />
            <span className="bar">|</span>
            <p className="title">FREE DELIVERY</p>
          </div>
          <div className="delivery-service-item">
            <img src={calendar} alt="" width="62px" />
            <span className="bar">|</span>
            <p className="title"> 7 DAYS A WEEK</p>
          </div>
          <div className="delivery-service-item">
            <img src={clock} alt="" width="62px" />
            <span className="bar">|</span>
            <p className="title">8:00 – 23:00</p>
          </div>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                backgroundImage: "var(--button-bg)",
                borderRadius: "30px",
                p: "10px 35px",
                mt: 3,
                fontSize: "17px",
                fontWeight: 600,
              }}
              className="button"
            >
              <Link to="/explore" style={{ color: "#fff" }}>
                Order Now
              </Link>
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "var(--color)",
                background: "#fff",
                borderRadius: "30px",
                p: "10px 35px",
                mt: 3,
                fontSize: "17px",
                fontWeight: 600,
                ml: { xs: 0, sm: 5 },
              }}
              className="button"
            >
              Read More
            </Button>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default DeliveryService;
