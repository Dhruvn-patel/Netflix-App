import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../store/slices/movieSlice";

const VideoPlayBackground = ({ movie_id }) => {
  const dispatch = useDispatch();
  const trailerId = useSelector((state) => state.movies?.trailerDetails?.key);
  const getMoviesVideoDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();
      // filter Trailer Data
      const filterData = data.results.filter((data) => data.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : data.results[0];
      console.log("trailer :>> ", trailer);

      dispatch(addMovieTrailer(trailer));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMoviesVideoDetails();
  }, []);

  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&disablekb=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoPlayBackground;
