import React from "react";
import { IMG_CDN } from "../utils/constant";

const MoiveCard = ({ poster_img }) => {
  return (
    <div>
      <div className="w-52 p-2">
        <img src={`${IMG_CDN}${poster_img}`} alt="" />
      </div>
    </div>
  );
};

export default MoiveCard;
