import RestaurantCard,{withCardUpdated} from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterlistOfRestaurant, setFilterListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");


  const RestaurantCardUpdate= withCardUpdated(RestaurantCard)
  //console.log("Body rendered",listOfRestaurant)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5830181&lng=88.4131218&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

   // console.log(json);
  //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // //console.log(
    //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );
    //setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    //setFilterListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>OOps! Come back ! You are offline</h1>;

  return listOfRestaurant.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="body">
      <div className="filter">
        <div className=" m-4 p-4">
          <input
            type="text"
            className="m-3 border border-solid border-black rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-2 py-2 bg-green-100 m-4 rounded-md"
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


        <div className="flex flex-wrap">
          {filterlistOfRestaurant.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {
                /* restaurant.data.isOpen? <RestaurantCardUpdate resData={restaurant}/>:<RestaurantCard resData={restaurant} /> */
                <RestaurantCard resData={restaurant} />
              }
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
