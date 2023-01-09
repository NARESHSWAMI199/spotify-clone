import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ daily_mix }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={daily_mix?.images[0].url} alt="" />
        <div className="body__textInfo">
          <strong>PLAYLIST</strong>
          <h2>{daily_mix?.name}</h2>
          <p> {daily_mix?.description} ....</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle MuiSvgIcon-root" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
      </div>

      {daily_mix?.tracks.items.map((item) => (
        <SongRow track={item.track} />
      ))}
    </div>
  );
}

export default Body;
