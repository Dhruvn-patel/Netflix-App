import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addUpComingMovies } from "../store/slices/movieSlice";
import { useDispatch } from "react-redux";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addUpComingMovies(data.results));
    } catch (error) {
      console.log("error  ", error);
    }
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
};
export default useUpComingMovies;
