import RestaurantCard from "./RestaurantCard";
import React, { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = React.useState(resList);
  //   {
  //     info: {
  //       id: "10370",
  //       name: "Pizza Hut",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "Nicco Park",
  //       areaName: "Bidhannagar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Fast Food", "Pizzas"],
  //       avgRating: 3.7,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "10372",
  //       name: "Dominos Hut",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "Nicco Park",
  //       areaName: "Bidhannagar",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Fast Food", "Pizzas"],
  //       avgRating: 4.8,
  //     },
  //   },
  // ]);

  const [myBoolean, setMyBoolean] = useState(false);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterListofRes = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filterListofRes);
            setListOfRestaurant(filterListofRes);
            setMyBoolean(true);
          }}
        >
          Top Rated restaurants {myBoolean.toString()}
        </button>
        <div className="res-container">
          {listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
