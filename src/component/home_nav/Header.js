import React from "react";
import "../../component/home_nav/Header.css";
import logo from "../../assets/nav_images/amazon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Logo" />

      <div className="header__search">
        <input type="text" className="header__searchinput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__opetionLineOne">Hello Guest</span>
          <span className="header__LineTwo">Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__opetionLineOne">Returns</span>
          <span className="header__LineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__opetionLineOne">Your</span>
          <span className="header__LineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
