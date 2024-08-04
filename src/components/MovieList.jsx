import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="px-4 ">
      <h1 className="text-3xl   font-semibold text-white">{title}</h1>
      <div className="flex  overflow-x-auto no-scrollbar">
        <div className="flex ">
          {movies?.length &&
            movies?.map((movie) => (
              <MovieCard key={movie.id} poster_img={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
