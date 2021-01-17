import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { variants } from "../common/animations";
import Movie from "./Movie";
import { MovieHome, MovieWrapper, Title, MoviePosters } from "./MovieStyles";

const MovieMenu = () => {
  const [movies, setMovies] = useState([]);
  const [others, setOthers] = useState([]);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await axios.get("https://nhuloz.xyz/movies");
        const data = res.data;
        setMovies([...data]);
        shuffleArray(data);
        setOthers([...data]);
      } catch (err) {
        console.log("fetch error", err);
      }
    }
    fetchVideo();
  }, []);

  return (
  <>
      <MovieWrapper>
        <Title size="2em">Recently</Title>
        <motion.div initial="initial" animate="animate" exit="exit" variants={variants.container}>
          <MoviePosters>
            {movies.map((movie) => (
              <Movie key={movie.id} id={movie.id} title={movie.title} backgroundUrl={movie.background} size="35vh"></Movie>
            ))}
          </MoviePosters>
        </motion.div>
      </MovieWrapper>
      <MovieWrapper>
        <Title size="1.25em">My Library</Title>
        <motion.div initial="initial" animate="animate" exit="exit" variants={variants.container}>
          <MoviePosters>
            {others.map((movie) => (
              <Movie key={movie.id} id={movie.id} title={movie.title} backgroundUrl={movie.background} size="20vh"></Movie>
            ))}
          </MoviePosters>
        </motion.div>
      </MovieWrapper>
    </>
  );
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default MovieMenu;
