import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Badge from '@material-ui/core/Badge';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          alt="Femshopi Online Store"
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" placeholder="Enter product or categories" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionOne">
              Hello {user ? user.email : "Guest"},
            </span>
            <span className="header__optionTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__checkoutButton">
          <div className="header__optionBasket">
            <Badge className="header__optionTwo header__basketCount" badgeContent={basket?.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
            {/* <span className="header__optionTwo header__basketCount"></span> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
