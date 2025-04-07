import React from "react";

const Bars = (props) => {
  return (
    <div className="flex items-end space-x-0 w-screen h-screen overflow-hidden">
      {props.nums.map((num, idx) => {
        return (
          <div
            key={idx}
            className={`w-60 ${
              (props.active === idx || props.active1 === idx) && props.sorting
                ? "bg-red-700"
                : "bg-gray-500"
            }`}
            style={{
              // transition: "height 0.1s ease-in-out",
              height: `${num / 10}%`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Bars;
