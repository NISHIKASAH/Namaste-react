import CardComponent from "./CardComponent";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  //note : useState return a ARRAY
  const [cardData, setcardData] = useState([]);
  const [TextValue, setTextValue] = useState("");
  const [filterCardData, setfilterCardData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const url_link2 =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=253768&catalog_qa=undefined&submitAction=ENTER";
    const url_link =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667";
    const data = await fetch(url_link);

    const json = await data.json();
    setcardData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterCardData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return filterCardData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="upper-Element">
        <div className="search">
          <input
            className="search-box "
            type="text"
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
            value={TextValue}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filterBysearch = cardData.filter((x) => {
                return x?.info.name
                  .toLowerCase()
                  .includes(TextValue.toLowerCase());
              });
              setfilterCardData(filterBysearch);
            }}
          >
            search
          </button>
        </div>
        <div className="filter">
          <button
            onClick={() => {
              const filterdata = cardData.filter((x) => {
                return x?.info.avgRating >= 4;
              });
              setfilterCardData(filterdata);
            }}
            className="filter-btn"
          >
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="body-Container">
        {filterCardData.map((x) => {
          {
            /*as map is javscript code,so we are using {} */
          }
          return <CardComponent key={x?.info.id} getdata={x} />;
        })}
      </div>
    </div>
  );
};

export default Body;
