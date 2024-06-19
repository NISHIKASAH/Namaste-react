import { useState } from "react";
import ListMenucard from "./ListMenucard";
const MenuCarditem = (props) => {
  const { passdata } = props;
  const [showdata, setshowdata] = useState(false);
  const handleClick = () => {
    setshowdata(true);
    if (showdata === true) {
      setshowdata(false);
    }
  };
  return (
    <div>
      <div className=" w-6/12 p-4  mx-auto my-4 shadow-lg">
        <div
          className="flex  justify-between cursor-pointer  "
          onClick={handleClick}
        >
          {passdata.title}({passdata.itemCards.length})
          <span className=" text-gray-400 ">▼</span>
        </div>
        {showdata && <ListMenucard getdata={passdata.itemCards} />}
      </div>
    </div>
  );
};

export default MenuCarditem;
