import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Password_Regex } from "../Utils/Regex.js";
import { showBasicSwal } from "../Contents/alert.js";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const PasswordErrSpan = useRef("");
  const [passwordErrDescription, setPasswordErrDescription] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  const [confirmedPassword, setConfirmedPassword] = useState("");
  const ConfirmedPasswordErrSpan = useRef("");
  const [confirmedPasswordErrDescription, setConfirmedPasswordErrDescription] =
    useState("");
  const [confirmedPasswordValid, setConfirmedPasswordValid] = useState(false);

  useEffect(() => {
    if (!Password_Regex.test(password) && password != "") {
      setPasswordValid(false);
      setPasswordErrDescription(
        "Password must contain at least 8 characters, including UPPER/lowercase and numbers"
      );
      PasswordErrSpan.current.style.display = "inline-block";
    } else if (password == "") {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
      PasswordErrSpan.current.style.display = "none";
    }
    if (confirmedPassword == password && confirmedPassword != "") {
      ConfirmedPasswordErrSpan.current.style.display = "none";
    }
  }, [password, confirmedPassword, setPassword]);

  useEffect(() => {
    if (confirmedPassword != password && confirmedPassword != "") {
      setConfirmedPasswordValid(false);
      setConfirmedPasswordErrDescription("Passwords do not match");
      ConfirmedPasswordErrSpan.current.style.display = "inline-block";
    } else if (confirmedPassword == "") {
      setConfirmedPassword(false);
    } else {
      setConfirmedPasswordValid(true);
      ConfirmedPasswordErrSpan.current.style.display = "none";
    }
  }, [confirmedPassword, password, setConfirmedPassword]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!passwordValid || !confirmedPasswordValid) {
      showBasicSwal("Error", "error", "Please fill in all fields correctly!");
    } else {
      showBasicSwal("Success", "success", "Password changed successfully!");
    }
  };
  return (
    <>
      <div className="resetPassContent authContent ">
        <div className="resetPassCard authCard">
          <div className="authForm">
            <h1>
              <Link className="authLinks" to="/">
                MyApp
              </Link>
            </h1>
            <h2>Reset Password</h2>
            <form onSubmit={submitHandler}>
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

              <div className=" mb-3">
                <div className="authInputDiv mb-3">
                  <input
                    type="password"
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <span ref={ConfirmedPasswordErrSpan} className="authSpan">
                  {confirmedPasswordErrDescription}
                </span>
              </div>

              <button type="submit" className="btn ">
                Change Password
              </button>
            </form>

            <div>
              <Link className="authLinks" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
