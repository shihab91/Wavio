import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Contact from '../Contact/Contact';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Story from "../story/Story";
const containerStyle = {
  backgroundColor: "rgb(237, 249, 255)",
  backgroundImage: `url("https://i.ibb.co/f4Ryhq6/homeBg.png")`,
  backgroundSize: "32% auto",
  backgroundRepeat: "no-repeat",
};
const Home = () => {
  return (
    <>
      <div style={containerStyle}>
        <Navigation />
        <HomeBanner />
      </div>
      <Products />
      <Review />
      <Story />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;