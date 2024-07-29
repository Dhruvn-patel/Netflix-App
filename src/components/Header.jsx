import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    // Sign-out
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="absolute  z-10 bg-gradient-to-b from-black w-screen p-2 flex justify-between">
        <img
          className="w-28"
          alt="banner-img"
          src="
https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />

        {user && (
          <div className="flex gap-3">
            <img
              className="w-12 rounded-md"
              src={user?.photoURL}
              alt="user_img"
            />
            <button
              className="bg-gray-500 rounded-lg p-2 text-white"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
