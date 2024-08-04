import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainerView from "./MainContainerView";
import MoviesContainer from "./MoviesContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {/* one Movie Trailer play and list all Movies  */}
      <MainContainerView />
      <MoviesContainer />
    </div>
  );
};

export default Browse;
