import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterlistOfRestaurant, setFilterListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5830181&lng=88.4131218&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    // //console.log(
    //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );
    //setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    //setFilterListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      setListOfRestaurant(resList)
      setFilterListOfRestaurant(resList)
  };

  if (listOfRestaurant.length === 0) return <h1>Loading...</h1>;

  return listOfRestaurant.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRes = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilterListOfRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterListofRes = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filterListofRes);
            setListOfRestaurant(filterListofRes);
          }}
        >
          Top Rated restaurants
        </button>
        <div className="res-container">
          {filterlistOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
