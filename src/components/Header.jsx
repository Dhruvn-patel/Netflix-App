import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/slices/userSlice";
import { LOGO, USER_AVTAR } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser(null));
        navigate("/");
      }
    });
    //unmount to unsubscribe
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <div>
      <div className="absolute  z-10 bg-gradient-to-b from-black w-screen p-2 flex justify-between">
        <img className="w-28" alt="banner-img" src={LOGO} />

        {user && (
          <div className="flex gap-3">
            <img
              className="w-12 rounded-md"
              src={user?.photoURL || USER_AVTAR}
              alt="user_photo"
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
