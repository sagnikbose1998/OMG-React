import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btn, setBtn] = useState(["login"]);
  const data = useContext(UserContext);
  const { loggedInUser } = data;

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex justify-between shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-200 mb-2">
      {" "}
      {/* Added bg-gradient-to-r with gradient colors */}
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="LOGO " />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4  text-blue-500 hover:text-blue-700">
            Online Status :{onlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-4  text-blue-500 hover:text-blue-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  text-blue-500 hover:text-blue-700">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-blue-500 hover:text-blue-700">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4  text-blue-500 hover:text-blue-700 font-bold">
          <Link to="/cart">Cart -{cartItems ? cartItems.length : 0} items</Link>
          </li>
          <button
            className="login  text-blue-500 hover:text-blue-700"
            onClick={() => {
              btn === "login" ? setBtn("logout") : setBtn("login");
            }}
          >
            {btn}
          </button>
          <li className="px-4  text-blue-500 hover:text-blue-700 font-semibold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
