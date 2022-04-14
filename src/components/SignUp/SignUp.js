import React, { useRef, useState } from "react";
import "./SignUp.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import signupImg from "../../images/sigin-up/signup-banner.jpg";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const emailRef = useRef("");
  const passRef = useRef("");
  const confirmPassRef = useRef("");

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = (event) => {
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const confirmPassword = confirmPassRef.current.value;
    // const agree = event.target.terms.checked;

    if (password !== confirmPassword) {
      document.getElementById("passError").style.display = "block";
    } else if (agree) {
      createUserWithEmailAndPassword(email, password);
    }

    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-2 p-5">
        <div className="col">
          <div className="login-banner">
            <img className="img-fluid" src={signupImg} alt="" />
          </div>
          <div className="mt-3">
            <Link style={{ color: "#00aefe" }} to="/login">
              Already have an account!
            </Link>
          </div>
        </div>
        <div className="col p-2 p-lg-5">
          <div className="login-form text-start">
            <header>
              <h1>
                Sign-
                <span style={{ color: "#00aefe" }}>Up</span>
              </h1>
            </header>
            <Form onSubmit={handleSignUp}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={passRef}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={confirmPassRef}
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <p id="passError" style={{ color: "red", display: "none" }}>
                Password Not Match.
              </p>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  name="terms"
                  onClick={() => setAgree(!agree)}
                  label="Accept Term and Condition"
                  className={agree ? "text-primary" : "text-secondary"}
                />
              </Form.Group>
              <Button disabled={!agree} className="signUP-btn" type="submit">
                SignUp
              </Button>
            </Form>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
