import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { variants } from "../common/animations";
import { MoviePoster } from "./MovieStyles";

const Movie = ({ id, title, backgroundUrl }) => {
  return (
    <>
      <motion.div variants={variants.card} whileTap={{ scale: 0.95 }}>
        <Link to={`/player/${id}`}>
          <MoviePoster src={backgroundUrl} atl={"123"} />
        </Link>
      </motion.div>
    </>
  );
};

export default Movie;
