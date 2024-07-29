import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const toggleLoginForm = () => setIsLoginForm(!isLoginForm);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = () => {
    const message = checkValidation(
      email?.current?.value,
      password?.current?.value
    );

    if (!name?.current?.value?.trim() && !isLoginForm) {
      setErrorMsg("Name is required.");
      return;
    }

    if (message) {
      setErrorMsg(message);
      return;
    }

    // Sign up and Sign In

    if (!isLoginForm) {
      // Signed up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("userCredential :>> ", userCredential);
          setErrorMsg("");
          const { user } = userCredential;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/8079861?s=80&v=4",
          })
            .then(() => {
              toggleLoginForm();

              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    } else {
      // Signed in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(userCredential);
          setErrorMsg("");
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute   ">
        <img
          className="h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_small.jpg"
          alt="background-img"
        />
      </div>

      <form
        action=""
        className="absolute w-3/12 bg-black my-24 left-0 right-0 mx-auto p-12  text-white opacity-90 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold my-2">
          {" "}
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
            onFocus={() => setErrorMsg("")}
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
          onFocus={() => setErrorMsg("")}
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-700"
          onFocus={() => setErrorMsg("")}
        />

        {errorMsg && <p> {errorMsg}</p>}
        <button
          className="p-4  my-4 bg-red-700 rounded-lg w-full"
          onClick={handleSubmit}
        >
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="">
          {isLoginForm ? (
            <span>
              New to Netflix ?
              <span
                className="font-bold mx-2 cursor-pointer"
                onClick={toggleLoginForm}
              >
                Sign up Now
              </span>
            </span>
          ) : (
            <span>
              Already Register ?
              <span
                className="font-bold mx-2 cursor-pointer"
                onClick={toggleLoginForm}
              >
                Sign in here
              </span>
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
