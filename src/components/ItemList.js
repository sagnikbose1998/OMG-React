import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-400 border-b-2 text-left"
          >
            <div>
              <button className="p-2 bg-white shadow-lg ">Add +</button>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-28 flex justify-end"
              />
            </div>
            <div className="p-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
