import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API + resId);
    const json = await data.json();
    console.log(json)
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
