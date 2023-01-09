import "./App.css";
import Login from "./Login.js";
import { getTokenFromUrl } from "./spotify";
import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
// this is an object which connect we with spotify

function App() {
  //  1. 👇here first value is an object where we put the value which we want get from the dataLayer
  //  2. here sevond 👇 value which is a dispcth which like a gun which update our data in dataLayer
  const [{ user, token }, dispatch] = useDataLayerValue();
  // this is  👆 something like dataLayer.user
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    // console.log("this is an token : ", token);
    if (_token) {
      // 👇 this is the "action" which we sendin on  👉 "./reducer.js"
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      // get me is use for actual user and this is an asychronize function
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlist: playlist,
        });
      });

      spotify.getPlaylist("37i9dQZF1E36hukMZZOKst").then((response) => {
        dispatch({
          type: "SET_DAILY_MIX",
          daily_mix: response,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
