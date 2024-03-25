import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { showBasicSwal } from "../Contents/alert.js";

import "../Styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fetch from "../Api/Fetch.js";

const Login = () => {
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!userNameValid || !passwordValid) {
      showBasicSwal("Error", "error", "Please fill in all fields correctly!");
    } else {
      const formData = new FormData();

      formData.append("emailOrUsername", userName);
      formData.append("password", password);

      const url = `${import.meta.env.REACT_APP_API_BASE_URL}/auth/Login`;
      var res = await Fetch(url, "POST", formData);

      if (res.success) {
        e.target.reset();
      } else {
        showBasicSwal("Error", "error", res.message);
      }
    }
  };

  const [userName, setUserName] = useState("");
  const UserNameErrSpan = useRef("");
  const [userNameErrDescription, setUserNameErrDescription] = useState("");
  const [userNameValid, setUserNameValid] = useState(false);

  const [password, setPassword] = useState("");
  const PasswordErrSpan = useRef("");
  const [passwordErrDescription, setPasswordErrDescription] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    if (userName.length < 5 && userName != "") {
      setUserNameValid(false);
      setUserNameErrDescription("Username must be at least 5 characters long");
      UserNameErrSpan.current.style.display = "inline-block";
    } else if (userName == "") {
      setUserNameValid(false);
    } else {
      setUserNameValid(true);
      UserNameErrSpan.current.style.display = "none";
    }
  }, [userName, setUserName]);

  useEffect(() => {
    if (password != "" && password.length < 8) {
      setPasswordValid(false);
      setPasswordErrDescription("Password is required");
      PasswordErrSpan.current.style.display = "inline-block";
    } else if (password == "") {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
      PasswordErrSpan.current.style.display = "none";
    }
  }, [password, setPassword]);

  return (
    <>
      <div className="loginContent authContent ">
        <div className="loginCard authCard">
          <div className="authForm">
            <h1>
              <Link className="authLinks" to="/">
                MyApp
              </Link>
            </h1>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <div className="authInputDiv">
                  <input
                    aria-invalid="true"
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <span ref={UserNameErrSpan} className="authSpan">
                  {userNameErrDescription}
                </span>
              </div>

              <div className=" mb-3">
                <div className="authInputDiv mb-3">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <span ref={PasswordErrSpan} className="authSpan">
                  {passwordErrDescription}
                </span>
              </div>
              <button type="submit" className="btn ">
                Login
              </button>
            </form>

            <div>
              <Link className="authLinks" to="/register">
                Register
              </Link>
              <Link className="authLinks" to="/forgotPassword">
                Forgot Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
