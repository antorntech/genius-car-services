import { Button } from "bootstrap";
import React from "react";
import "./SocialLogin.css";
import googleIcon from "../../images/social/google.png";
import facebook from "../../images/social/facebook.png";
import github from "../../images/social/github.png";

const SocialLogin = () => {
  return (
    <div>
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
      <div>
        <button className="googleBtn my-2">
          <img src={googleIcon} alt="" />
          <span className="px-2">Sign In With Google</span>
        </button>
        <button className="googleBtn my-2">
          <img src={facebook} alt="" />
          <span className="px-2">Sign In With Facebook</span>
        </button>
        <button className="googleBtn my-2">
          <img src={github} alt="" />
          <span className="px-2">Sign In With Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
