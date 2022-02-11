import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import SmoothScrollBar from "../../Shared/smoothScrollBar/SmoothScrollBar";
import Contact from "../Contact/Contact";
import DeliveryService from "../deliveryService/DeliveryService";
import HomeBanner from "../HomeBanner/HomeBanner";
import Products from "../Products/Products";
import Review from "../Review/Review";
import Story from "../story/Story";
const containerStyle = {
  backgroundColor: "rgb(237, 249, 255)",
  backgroundImage: `url("https://i.ibb.co/f4Ryhq6/homeBg.png")`,
  backgroundSize: "50% auto",
  backgroundRepeat: "no-repeat",
};
const Home = () => {
  return (
    <>
      <SmoothScrollBar>
        <div style={containerStyle}>
          <Navigation />
          <HomeBanner />
        </div>
        <Products />
        <DeliveryService />
        <Review />
        <Story />
        <Contact />
        <Footer />
      </SmoothScrollBar>
    </>
  );
};

export default Home;