import { IMG_URL } from "../utils/constant";
const CardComponent = (props) => {
  const { getdata } = props;
  const { name, cloudinaryImageId, costForTwoString, cuisines, avgRating } =
    getdata?.info;
  return (
    <div className="card-items">
      <img className="card-img" src={IMG_URL + cloudinaryImageId}></img>
      <div className="food-details">
        <p>{name}</p>
        <p>{costForTwoString}</p>
        <p>{avgRating}</p>
        <p>{cuisines.join(",")}</p>
      </div>
    </div>
  );
};

export default CardComponent;
