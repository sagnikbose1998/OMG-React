import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard"; // Import RestaurantCard component
import mockApiResponse from "../utils/mockData.json"// Import mock API response from file

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterlistOfRestaurant, setFilterListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Set the list of restaurants from the mock API response
    setListOfRestaurant(mockApiResponse.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilterListOfRestaurant(mockApiResponse.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }, []);

  const { loggedInUser, setUserName } = useContext(UserContext);

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
          <label>UserName</label>
          <input
            className="border border-black px-2 mx-2"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div>

        <div className="flex flex-wrap">
          {filterlistOfRestaurant.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
