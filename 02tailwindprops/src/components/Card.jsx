import React from "react";

function Card({channel, btn="CLICK RIGHT HERE"}) {
    console.log(channel);
    
  return (
    <div className="relative h-[400px] w-[300px] rounded-md m-4">
      <img
        src="https://i.pinimg.com/736x/e7/1e/ed/e71eed228bdb81e9b08fdf6b55c81191.jpg"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{channel}</h1>
        <p className=" mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btn}
        </button>
      </div>
    </div>
  );
}

export default Card;
