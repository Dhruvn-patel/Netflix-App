import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainerView from "./MainContainerView";
import MoivesLists from "./MoivesLists";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* one Movie Trailer play and list all Movies  */}
      <MainContainerView />
      <MoivesLists />
    </div>
  );
};

export default Browse;
