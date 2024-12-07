import React from "react";
import Slider from "../components/Slider";
import LatestVisas from "../components/LatestVisas";
import TopCountries from "../components/TopCountries";
import WhyVisaGlide from "../components/WhyVisaGlide";
import Success from "../components/Success";
import UserReviews from "../components/UserReviews";


const Home = () => {
  return (
    <>
      <Slider />
      <LatestVisas/>
      <TopCountries/>
      <Success/>
      <UserReviews/>
    </>
  );
};

export default Home;
