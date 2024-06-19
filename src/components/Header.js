import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import LoginPage from "./LoginPage";
import useOnlinefeature from "../utils/useOnlinefeature";
import { useSelector } from "react-redux";
import userContext from "../utils/userContext";

const Header = () => {
  const userData = useContext(userContext);

  const [loginbtn, setloginbtn] = useState("login");
  const getlogin = () => {
    if (loginbtn === "login") {
      setloginbtn("logout");
    } else {
      setloginbtn("login");
    }
  };

  const cartItems = useSelector((store) => store.cart.items);

  const showOnline = useOnlinefeature();
  return (
    <div className="bg-yellow-500 flex justify-between shadow-2xl">
      <img className=" w-14 rounded-full ml-4 py-3" src={LOGO_URL} alt="logo" />
      <div className="flex justify-end items-center ">
        <ul className="flex px-5">
          <li className="px-3  text-gray-200 font-sans  hover:text-zinc-800  font-medium">
            OnlineStatus : {showOnline === "online" ? "🟢" : "🔴"}
          </li>
          <li className="px-3  text-gray-200 font-sans  hover:text-zinc-800 font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3  text-gray-200 font-sans  hover:text-zinc-800 font-medium">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3  text-gray-200 font-sans  hover:text-zinc-800 font-medium">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3  text-gray-200 font-sans  hover:text-zinc-800 font-medium">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3  text-gray-200 font-sans  hover:text-zinc-800 font-medium">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>

          <Link
            className="px-5  text-gray-200 font-sans  hover:text-zinc-800 font-medium"
            to="/login"
          >
            {" "}
            <button
              onClick={getlogin}
              className=" text-gray-200 font-sans  hover:text-zinc-800"
            >
              {loginbtn}
            </button>
          </Link>
          <li className="px-3  text-gray-200 font-sans  hover:text-zinc-800 font-medium">
            <Link>{userData.userName}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
