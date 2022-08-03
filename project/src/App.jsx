import React, { useState } from "react";
import person from "./assets/images/image-jeremy.png";
import Card from "./Card";
import data from "./assets/data.json";

const App = () => {
  const [selector, setSelector] = useState("daily");

  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="bg-card-500 rounded-xl row-span-2 flex flex-col">
        <div className="bg-primary p-6 flex items-center gap-4 rounded-xl md:flex-col md:items-start flex-1">
          <img
            src={person}
            alt=""
            className=" w-12 border-2 rounded-full border-white"
          />
          <div>
            <p className="text-xs text-text-100">Report for</p>
            <p className="md:text-2xl">Jeremy Robson</p>
          </div>
        </div>
        <ul className="px-6 py-3 flex justify-between text-text-200 font-light md:flex-col max-h-fit">
          <li
            className={
              "hover:text-white cursor-pointer " +
              (selector === "daily" && "text-white font-medium")
            }
            onClick={() => setSelector("daily")}
          >
            Daily
          </li>
          <li
            className={
              "hover:text-white cursor-pointer " +
              (selector === "weekly" && "text-white font-medium")
            }
            onClick={() => setSelector("weekly")}
          >
            Weekly
          </li>
          <li
            className={
              "hover:text-white cursor-pointer " +
              (selector === "monthly" && "text-white font-medium")
            }
            onClick={() => setSelector("monthly")}
          >
            Monthly
          </li>
        </ul>
      </div>
      {data.map(({ title, icon, color, timeframes }, i) => (
        <Card
          key={i}
          title={title}
          icon={icon}
          color={color}
          hrs_current={timeframes[selector].current}
          hrs_last={timeframes[selector].previous}
        />
      ))}
    </div>
  );
};

export default App;
