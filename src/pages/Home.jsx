import React from "react";
import Slider from "../components/Slider";
import LatestVisas from "../components/LatestVisas";
import TopCountries from "../components/TopCountries";

const Home = () => {
  return (
    <>
      <Slider />
      <LatestVisas/>
      <TopCountries/>
    </>
  );
};

export default Home;
