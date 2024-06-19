import React, { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [restaurantsItem, setrestaurantsItem] = useState(null);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setrestaurantsItem(json.data);
  };

  return restaurantsItem;
};

export default useRestaurantMenu;
