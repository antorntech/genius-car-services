import React, { useRef } from "react";
import "./Login.css";
import loginImg from "../../images/sigin-up/login-banner.jpg";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const handleLoginForm = (event) => {
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-2 p-5">
        <div className="col">
          <div className="login-banner">
            <img className="img-fluid" src={loginImg} alt="" />
          </div>
          <div className="mt-3">
            <Link style={{ color: "#00aefe" }} to="/sign-up">
              create an account
            </Link>
          </div>
        </div>
        <div className="col p-2 p-lg-5">
          <div className="login-form text-start">
            <header>
              <h1>
                Log-
                <span style={{ color: "#00aefe" }}>In</span>
              </h1>
            </header>
            <Form onSubmit={handleLoginForm}>
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
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button className="login-btn" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
