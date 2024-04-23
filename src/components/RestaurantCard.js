import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userEvent from "@testing-library/user-event";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;
  const {loggedInUser}= useContext(UserContext)
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4 className="overflow-wrap break-words">{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export const withCardUpdated=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label>Cheking label</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
