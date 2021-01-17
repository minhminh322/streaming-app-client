import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { FaArrowCircleLeft } from "react-icons/fa";
import { MoviePlayerWrapper, MoviePlayer, BackButton } from "./MovieStyles";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/sea/index.css";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const Player = () => {
  // Get the video id
  let { id } = useParams();

  const playerRef = useRef(null);
  const videoOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    aspectRatio: "16:9",
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: `https://nhuloz.xyz/movie/${id}`,
        type: "video/mp4",
      },
    ],
  };
  useEffect(() => {
    if (playerRef) {
      const player = videojs(playerRef.current, videoOptions, function onPlayerReady() {
        // console.log("onPlayerReady", this);
      });
      return () => {
        player.dispose();
      };
    }
  }, []);

  return (
    <>
      <MoviePlayerWrapper>
        <motion.div className="relative z-50 w-full bg-black" initial="initial" animate="animate" variants={blackBox} />
        <BackButton>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link to="/">
              <IconContext.Provider value={{ color: "white", size: "50px" }}>
                <FaArrowCircleLeft />
              </IconContext.Provider>
            </Link>
          </motion.div>
        </BackButton>

        <MoviePlayer>
          <div data-vjs-player>
            <video ref={playerRef} className="video-js vjs-theme-sea"></video>
          </div>
        </MoviePlayer>
      </MoviePlayerWrapper>
    </>
  );
};

export default Player;
