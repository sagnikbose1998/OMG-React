import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems }) => {
  
  const handleClick = () => {
  //  setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 m-auto mx-auto my-4  bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
