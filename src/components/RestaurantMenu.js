import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);
  //console.group(resInfo)

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  const { info } = resInfo.cards[2].card.card;
  

  const categories =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  

  //console.log(itemCards)

  const { name, avgRating, costForTwo, cuisines } = info;
  return (
    <div className="text-center">
      <h2 className="font-extrabold my-5 text-2xl">{name}</h2>
      <h2 className="font-light">Cuisines:{cuisines.join(",")}</h2>
      <h2 className="font-light">Cost For Two : {costForTwo / 100}</h2>
      <h2 className="font-light">Average Rating : {avgRating}</h2>
      {categories.map((category,index) => (
        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===1 && true}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
