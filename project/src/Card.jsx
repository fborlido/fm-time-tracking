import React, { useState } from "react";
import ellipsis from "./assets/images/icon-ellipsis.svg";

const Card = ({ title, icon, color, hrs_current, hrs_last }) => {
  const [img, setImg] = useState(null);

  import(`./assets/images/${icon}.svg`).then((path) => setImg(path.default));

  const bgColor = {
    orange: "bg-orange",
    blue: "bg-blue",
    pink: "bg-pink",
    green: "bg-green",
    purple: "bg-purple",
    yellow: "bg-yellow",
  };

  return (
    <div className="bg-card-500 p-6 mt-6 relative rounded-xl cursor-pointer hover:bg-card-400  ">
      <div
        className={`h-10 w-full absolute -top-6 left-0 -z-10 rounded-xl ${
          bgColor[`${color}`]
        }`}
      >
        <img src={img} alt="" className="absolute right-4 w-12" />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-medium ">{title}</p>
        <img src={ellipsis} alt="" />
      </div>
      <div className="flex items-center justify-between md:flex-col md:items-start">
        <p className="text-xl font-light md:text-3xl">{hrs_current}hrs</p>
        <p className="text-xs text-text-200">Last Week - {hrs_last}hrs</p>
      </div>
    </div>
  );
};

export default Card;
