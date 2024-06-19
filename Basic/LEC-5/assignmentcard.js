import { IMG_URL } from "../utils/constant";
const CardComponent = (props) => {
  const { getdata } = props;
  const { name, offer, rating, image, cuisines } = getdata.data;

  return (
    <div className="card-items">
      <img className="card-img" src={IMG_URL + image}></img>
      <div className="food-details">
        <p>{name}</p>
        <p>{offer}</p>
        <p>{rating}</p>
        <p> {cuisines.join(",")}</p>
      </div>
    </div>
  );
};

export default CardComponent;
