
  import React from "react";
  import MenuLink from "../menuLink/MenuLink";
  import "./leftbar.css";
  
  export default function Leftbar() {
    return (
      <div className="leftbar">
        <div className="leftbarWrapper">
          <MenuLink text="Homepage" />
          <MenuLink text="Lists" />
          <MenuLink text="Products" />
          <MenuLink text="Groups" />
          <MenuLink text="Pages" />
          <MenuLink text="Photos" />
          <MenuLink text="Videos" />
          <MenuLink text="Schedule" />
          <MenuLink text="Wishlist" />
          <MenuLink text="Settings" />
          <MenuLink text="Logout" />
        </div>
      </div>
    );
  }