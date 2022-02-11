import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import SmoothScrollBar from "../../Shared/smoothScrollBar/SmoothScrollBar";
import AllProducts from "../AllProducts/AllProducts";
const Explore = () => {
  const navbar = {
    background: "#EDF9FF",
  };
  return (
    <>
      <SmoothScrollBar>
        <div style={navbar}>
          {" "}
          <Navigation></Navigation>
        </div>
        <AllProducts></AllProducts>
        <Footer></Footer>
      </SmoothScrollBar>
    </>
  );
};

export default Explore;