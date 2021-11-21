import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Contact from '../Contact/Contact';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <HomeBanner></HomeBanner>
      <Products></Products>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;