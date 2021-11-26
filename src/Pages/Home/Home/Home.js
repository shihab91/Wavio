import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Contact from '../Contact/Contact';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import Review from '../Review/Review';
const containerStyle = {
  backgroundColor: "rgb(237, 249, 255)",
  backgroundImage: `url("https://previews.dropbox.com/p/thumb/ABUQvskxVjYbeUPWdQyjPtoW_E8gLWD1neJXC4lv1xuRU2rUSfClWK1VxSp9pMV_bWQNItxNyy2zkX7nDx1fSJjUHU3JiEF_C7gztFPf3sF3IjGGxp02-NXjtkLvEcgbvWUfN84AYD0s8LGL3zTybCtyNEiixmAZzRWmlChha9iotrmFre4rv190ecIA392xluNj-DWVxRbGHACrUH2YkW8YJ3BMqvLGfOWw0ktcqjRZyw7_xTpWWgz-SkP-wZ8RZjp5ebilS3IivLk3uM7Yx8xwdUA6dDY6KanTl2RPgs69g5HpRRpPMlioBuZLqZWp9i9Lsl3HapsNrgt22EeiRyHqxN0GfWRU63lGeejpb-5AIg/p.png")`,
  backgroundSize: "32% auto",
  backgroundRepeat: "no-repeat",
};
const Home = () => {
  return (
    <>
      <div style={containerStyle}>
        <Navigation></Navigation>
        <HomeBanner></HomeBanner>
      </div>
      <Products></Products>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;