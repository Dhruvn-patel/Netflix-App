import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const MoivesContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black ">
      {/* All List Trending,entertainment  */}
      {/* nowPlaying */}
      <div className="-mt-44 relative z-10">
        {movies?.nowPlayingMovies && (
          <MovieList movies={movies?.nowPlayingMovies} title={"Now Playing"} />
        )}
        {movies?.trendingMovies && (
          <MovieList movies={movies?.trendingMovies} title={"Trending"} />
        )}
        {movies?.upComingMovies && (
          <MovieList movies={movies?.upComingMovies} title={"Upcoming"} />
        )}
        {movies?.topRatedMovies && (
          <MovieList movies={movies?.topRatedMovies} title={"Top rated"} />
        )}
      </div>
    </div>
  );
};

export default MoivesContainer;
