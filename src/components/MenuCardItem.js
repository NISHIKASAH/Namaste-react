import { useState } from "react";
import ListMenucard from "./ListMenucard";
const MenuCarditem = (props) => {
  const { passdata, showidx, setdata } = props;

  const handleClick = () => {
    setdata();
  };
  return (
    <div>
      <div className=" w-6/12 p-4  mx-auto my-4 shadow-lg">
        <div
          className="flex  justify-between cursor-pointer font-medium  "
          onClick={handleClick}
        >
          {passdata.title}({passdata.itemCards.length})
          <span className=" text-gray-400 ">▼</span>
        </div>
        {showidx && <ListMenucard getdata={passdata.itemCards} />}
      </div>
    </div>
  );
};

export default MenuCarditem;
