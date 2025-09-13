import React from "react";
import Card from "../components/Card";

const CardSection = () => {
  const cards = [
    { img: "./portfolio-1.png" },
    { img: "./portfolio-2.png" },
    { img: "./portfolio-3.png" },
    { img: "./portfolio-4.png" },
    { img: "./portfolio-5.png" },
    { img: "./portfolio-6.png" },
  ];
  return (
    <section className="h-auto md:min-h-screen bg-white/30 ">
      <div className="mx-4 md:mx-8 lg:mx-10 lg:p-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {cards.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
