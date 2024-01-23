import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState(["login"]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="LOGO " />
      </div>
      <div className="navbar-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About us</li></Link>
          <Link to="/contact"><li>Contact us</li></Link>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btn === "login" ? setBtn("logout") : setBtn("login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
