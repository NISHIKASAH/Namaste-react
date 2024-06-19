import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCarditem from "./MenuCardItem";
import { useState } from "react";
const MenuCard = () => {
  const { resId } = useParams();
  const [showitems, setshowitems] = useState(null);

  const restaurantsItem = useRestaurantMenu(resId);
  if (restaurantsItem === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantsItem?.cards[2]?.card?.card?.info;

  const catergories =
    restaurantsItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (x) => {
        return (
          x.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="text-center">
      <div>
        <h1 className=" mt-4 font-bold">{name}</h1>
        <p className="font-medium ">
          {cuisines.join(",")}-{costForTwoMessage}
        </p>
        <h4 className=" mt-4 font-serif text-orange-700 font-semibold">Menu</h4>
        {/* categories accordian */}
        {catergories.map((category, idx) => {
          return (
            <MenuCarditem
              key={category?.card?.card?.title}
              passdata={category?.card?.card}
              // uplifting the component by parentcomponet controlling child component
              showitems={idx === showitems ? true : false}
              setshowitems={() => setshowitems(idx)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuCard;

//<div>{category?.card?.card?.title}</div>;
