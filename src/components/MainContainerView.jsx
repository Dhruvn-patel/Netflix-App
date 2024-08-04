import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoPlayBackground from "./VideoPlayBackground";

const MainContainerView = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const { original_title, overview, id } = movie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoPlayBackground movie_id={id} />
    </div>
  );
};

export default MainContainerView;
