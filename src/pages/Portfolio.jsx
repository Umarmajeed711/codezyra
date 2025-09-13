import HeroSection from "../sections/HeroSection";
import CardSection from "../sections/CardSection";

const Portfolio = () => {
  const portfolioData = {
    title: "Build the Future with Us",
    description:
      "We’re a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve meaningful problems.",
    btnText: "Explore Open Positions",
    img: "./portfolio_banner.png",
  };
  return (
    <main>
      {/* hero section */}
      <HeroSection data={portfolioData} />
      <CardSection />
     
    </main>
  );
};

export default Portfolio;
