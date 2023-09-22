import React from "react";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Footer";
import IntroductionSection from "../components/HomePageSections/IntroductionSection";
import Cards from "../components/CardsHowItWorks/Cards";
import Team from "../components/Team";
import { useEffect } from "react";

const Homepage = () => {
  return (
    <div className="w-full flex flex-col gap-[30vh]">
      <IntroductionSection />
      <Cards />
      <Team />
      <Footer />
    </div>
  );
};

export default Homepage;
