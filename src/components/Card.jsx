import React from "react";

const Card = ({ data }) => {
  
  return (
    <div className="card bg-base-100 shadow-md shadow-blue-400 rounded-lg">
      <figure>
        <img
        className="w-full"
        // src="./porfolio-1.png"
          src={`${
            data?.img
              ? data.img
              : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col gap-2 p-4">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-blue-500 px-4 py-2 rounded text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
