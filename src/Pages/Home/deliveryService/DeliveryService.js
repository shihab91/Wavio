import { Container } from "@mui/material";
import React from "react";
import "./deliveryService.css";
import img from "../../../images/Group.png";
const DeliveryService = () => {
  return (
    <Container>
      <div className="delivery-service-wrapper">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div class="texts">
          <h2>
            DELIVERY <span style={{ color: "var(--blue-color)" }}>SERVICE</span>
          </h2>
          <p
            className="description"
            style={{ textAlign: "left", marginLeft: 0 }}
          >
            Our refreshing purified bottled water can now be delivered directly
            to your door with our water delivery service.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default DeliveryService;
