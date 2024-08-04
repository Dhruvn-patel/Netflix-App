export const USER_AVTAR =
  "https://takeuforward.org/static/media/user.2e001b856e90a7542ef2.jpg";
export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
};
export const IMG_CDN = "http://image.tmdb.org/t/p/w500";
