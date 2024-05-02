import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btn, setBtn] = useState("login");
  const data = useContext(UserContext);
  const { loggedInUser } = data;

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-gradient-to-r from-rose-200 via-lavender-200 to-sky-200 mb-2">
      <div className="logo-container flex items-center">
        <img className="w-10 mr-2" src={LOGO_URL} alt="YumYumYay Logo" />
        <h1 className="text-2xl font-bold">YumYumYay</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-blue-500 hover:text-blue-700">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-4 text-blue-500 hover:text-blue-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-blue-500 hover:text-blue-700">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-blue-500 hover:text-blue-700">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-blue-500 hover:text-blue-700 font-bold">
            <Link to="/cart">
              Cart - {cartItems ? cartItems.length : 0} items
            </Link>
          </li>
          <button
            className="login text-blue-500 hover:text-blue-700"
            onClick={() => {
              setBtn(btn === "login" ? "logout" : "login");
            }}
          >
            {btn}
          </button>
          <li className="px-4 text-blue-500 hover:text-blue-700 font-semibold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
