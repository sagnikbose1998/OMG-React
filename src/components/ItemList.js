import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li
            key={item.card.info.id}
            className="p-2 m-2 border-gray-400 border-b-2 text-left flex"
          >
            <div>
              <button
                className="p-2 bg-white shadow-lg"
                onClick={() => {
                  handleAddItem(item);
                }}
                aria-label={`Add ${item.card.info.name} to cart`}
              >
                Add +
              </button>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-28 flex justify-end"
              />
            </div>
            <div className="p-2 flex flex-col">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="font-semibold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="">{item.card.info.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
