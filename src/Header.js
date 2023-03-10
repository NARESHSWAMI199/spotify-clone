import React from "react";
import SearchIcom from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { useDataLayerValue } from "./DataLayer";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcom />
        <input placeholder="Search for Artists , Song" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="NS" />
        <h4> {user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
