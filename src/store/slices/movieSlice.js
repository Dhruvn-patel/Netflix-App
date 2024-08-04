import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerDetails: null,
    trendingMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerDetails = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addTrendingMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
