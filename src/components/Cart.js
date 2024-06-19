import { useSelector } from "react-redux";
import ListMenucard from "./ListMenucard";

const Cart = () => {
  const cartdata = useSelector((store) => store.cart.items);
  console.log(cartdata);
  return (
    <div className="w-6/12 mx-auto mt-3">
      <ListMenucard getdata={cartdata} />
    </div>
  );
};
export default Cart;
