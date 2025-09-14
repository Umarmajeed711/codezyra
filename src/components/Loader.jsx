import React from "react";

const Loader = () => {
  return (
    <div className="flex gap-2">
      <div className="w-5 h-5 rounded-full border-[4px] border-white border-t-orange-400 animate-spin"></div>
      <div>Contact us</div>
    </div>
  );
};

export default Loader;
