import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar } from "@mui/material";

function Header({ handleClick, cart, handleOver ,over,handleOut }) {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="./images/logo.jpg" alt="logo" />
      </div>
      <div className="header__input">
        <div className="header__search-icon">
          <SearchIcon />
        </div>
        <input type="text" />
      </div>
      <div className="header__options">
        <a href="Home">Home</a>
        <div className="header__options_dropdown">
          <a href="Product">Product</a>
          <ArrowDropDownIcon className="dropDown__icon" />
        </div>

        <a href="Promo">Promo</a>
        <a href="Contact">Contact us</a>
      </div>
      <div className="header__icons">
        <NotificationsOutlinedIcon />
        <ChatOutlinedIcon />
        <StorefrontOutlinedIcon />
        <button
          style={
            cart.length > 0
              ? { backgroundColor: "#C8D6E5", border: "none" }
              : { backgroundColor: "none", border: "none" }
          }
          onClick={() => handleClick()}
          onMouseOver={()=>handleOver()}
          onMouseOut={()=>handleOut()}
        >
           {/* {over && <div>{cart.map((item) => {
              return(
                <span>  {item.title} ${item.price}</span>
              )
            })}</div>} */}
            {(over && cart.length<1) && <span>No items</span>}
          <Badge badgeContent={cart.length} color="primary">
            {cart.length > 0 && <ShoppingCartOutlinedIcon color="primary" />}{" "}
            {cart.length === 0 && <ShoppingCartOutlinedIcon />}
            
          </Badge>
         
        </button>
        <div className="header__avatar">
          {" "}
          <Avatar src="/static/images/avatar/2.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Header;
