import React, { useEffect, useState } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  var audio = new Audio("./audio/sound.mp3");

  useEffect(() => {
    function playsong() {
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            // Automatic playback started!
            // Show playing UI.
            console.log("audio played auto");
          })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
            console.log("playback prevented");
          });
      }
    }
    playsong();
  }, [audio]);

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/600px-Nirvana_album_cover.svg.png"
          className="footer__albumLogo"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Yeah !</h4>
          <p>Usher !</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__previous footer__icon" />

        <PlayCircleOutlineIcon
          fontSize="large"
          className="footer__play footer__icon"
        />

        <SkipNextIcon className="footer__skipnext footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className="MultiSlider-root" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
