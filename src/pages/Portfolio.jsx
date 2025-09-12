import React from "react";

import "./Portfolio.css";
import Hero from "../components/Hero";

const Portfolio = () => {
  const contactData = {
    title: "Build the Future with Us",
    description:
      "We’re a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve meaningful problems.",
    btnText: "Explore Open Positions",
    img: "./portfolio_banner.png",
  };
  return (
    <div>
      <Hero data={contactData} />
    </div>
  );
};

export default Portfolio;
