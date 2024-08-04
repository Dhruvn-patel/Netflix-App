import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrendingMovies } from "../store/slices/movieSlice";
import { useDispatch } from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addTrendingMovies(data.results));
    } catch (error) {
      console.log("error  ", error);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};
export default useTrendingMovies;
