import { IMG_URL } from "../utils/constant";
const CardComponent = (props) => {
  const { getdata } = props;
  const {
    id,
    name,
    cloudinaryImageId,
    costForTwoString,
    cuisines,
    avgRating,
    isOpen,
  } = getdata?.info;
  return (
    <div className="w-56 shadow-xl rounded-xl px-4 py-2 hover:bg-yellow-100">
      <img className="rounded-lg " src={IMG_URL + cloudinaryImageId}></img>
      <h2>{id}</h2>
      <h2>{name}</h2>
      <h4>{costForTwoString}</h4>
      <h1>{avgRating}</h1>
      <h1>{isOpen === true ? <p>open</p> : <p>close</p>}</h1>
      <div className="break-words">
        <h3> {cuisines.join(",")}</h3>
      </div>
    </div>
  );
};

export default CardComponent;
