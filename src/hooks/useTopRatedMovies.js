import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../store/slices/movieSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.log("error  ", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
