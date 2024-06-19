import CardComponent from "./CardComponent";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinefeature from "../utils/useOnlinefeature";

const Body = () => {
  //note : useState return a ARRAY
  const [cardData, setcardData] = useState([]);
  const [TextValue, setTextValue] = useState("");
  const [filterCardData, setfilterCardData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
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
  const onlineStatus = useOnlinefeature();
  if (onlineStatus === "offline") {
    return <h1>Internet Connection Breaks</h1>;
  }

  return filterCardData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex px-6 py-4 justify-between mt-2 items-center">
        <div className="px-3 py-2 ">
          <input
            className="px-4 py-2 rounded-lg border-2 border-slate-900"
            type="text"
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
            value={TextValue}
          />
          <button
            className="bg-amber-500 px-3 py-2 rounded-lg ml-5 font-medium hover:bg-yellow-400"
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
        <div className="px-3 py-2 bg-amber-600 text-gray-100 shadow-xl rounded-md hover:bg-yellow-500">
          <button
            onClick={() => {
              const filterdata = cardData.filter((x) => {
                return x?.info.avgRating >= 4;
              });
              setfilterCardData(filterdata);
            }}
            className="px-2 py-1"
          >
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filterCardData.map((x) => {
          {
            /*as map is javscript code,so we are using {} */
          }
          return (
            <Link to={"/menucard/" + x?.info.id} key={x?.info.id}>
              {" "}
              <CardComponent key={x?.info.id} getdata={x} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
