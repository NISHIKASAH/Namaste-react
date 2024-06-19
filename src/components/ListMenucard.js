import { addItems } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";

const ListMenucard = ({ getdata }) => {
  const dispatch = useDispatch();

  const handleClick = (items) => {
    dispatch(addItems(items));
  };

  return (
    <div>
      {getdata.map((x, idx) => (
        <div key={idx} className=" text-left mt-4 border-b-2 ">
          <div className="flex justify-between">
            <div>
              <span className="font-thin">{x?.card?.info.name}</span>
              {"-"}
              <span>
                {x?.card?.info?.price
                  ? x?.card?.info?.price / 100
                  : x?.card?.info?.defaultPrice / 100}
              </span>
              <p className="font-thin text-sm ">{x?.card?.info?.description}</p>
              <br />
            </div>

            <div className="flex-col relative">
              <img
                className="w-24 h-20 rounded-md "
                src={IMG_URL + x?.card?.info.imageId}
                alt="food"
              />
              <button
                onClick={() => handleClick(x)}
                className="bg-neutral-700  absolute top-0 left-0 px-1 py- rounded  text-zinc-200  hover:bg-zinc-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListMenucard;
