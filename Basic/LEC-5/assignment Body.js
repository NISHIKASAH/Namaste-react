import CardComponent from "./assignmentcard";
import { useState } from "react";
import { resdata2 } from "../utils/mockData";

//playing with types of data list
const randDom = [
  {
    data: {
      id: "0",
      image: "ch07avzpos83wrfdfhyh",
      name: "McDonald's",
      rating: 4.3,
      cuisines: ["fast food", "Biryani", "American"],
      time: "30-40",
      offer: "50%",
    },
  },
  {
    data: {
      id: "1",
      image: "hiezygiuixjqjogg6w2b",
      name: "Special Biriyani",
      rating: 3.8,
      cuisines: ["asian", "biryani", "American"],
      time: "30-40",
      offer: "60%",
    },
  },
];

const Body = () => {
  //note : useState return a ARRAY
  const [cardData, setcardData] = useState(randDom);
  return (
    <div className="body">
      <div className="upper-Element">
        <div className="search">
          <input className="search-box " type="text" />
        </div>
        <div className="filter">
          <button
            onClick={() => {
              const filterdata = cardData.filter((x) => {
                return x.data.rating >= 4;
              });
              setcardData(filterdata);
            }}
            className="filter-btn"
          >
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="body-Container">
        {cardData.map((x) => {
          {
            /*as map is javscript code,so we are using {} */
          }
          return <CardComponent key={x.data.id} getdata={x} />;
        })}
      </div>
    </div>
  );
};

export default Body;
