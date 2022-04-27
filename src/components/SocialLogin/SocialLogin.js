import { Button } from "bootstrap";
import React from "react";
import "./SocialLogin.css";
import googleIcon from "../../images/social/google.png";
import facebook from "../../images/social/facebook.png";
import github from "../../images/social/github.png";
import auth from "../../firebase.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }

  return (
    <div className="my-3">
      <div className="d-flex align-items-center">
        <div
          style={{ borderBottom: "1px solid #b8b8b8" }}
          className="w-50"
        ></div>
        <div>
          <p style={{ color: "#7a7a7a" }} className="px-2 mt-2">
            or
          </p>
        </div>
        <div
          style={{ borderBottom: "1px solid #b8b8b8" }}
          className="w-50"
        ></div>
      </div>
      {errorElement}
      <div>
        <button onClick={() => signInWithGoogle()} className="googleBtn my-2">
          <img src={googleIcon} alt="" />
          <span className="px-2">Sign In With Google</span>
        </button>
        <button className="googleBtn my-2">
          <img src={facebook} alt="" />
          <span className="px-2">Sign In With Facebook</span>
        </button>
        <button onClick={() => signInWithGithub()} className="googleBtn my-2">
          <img src={github} alt="" />
          <span className="px-2">Sign In With Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
