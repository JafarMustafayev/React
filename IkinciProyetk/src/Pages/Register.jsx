import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { showBasicSwal } from "../Contents/alert.js";
import { Phone_Regex, Email_Regex, Password_Regex } from "../Utils/Regex.js";

import "../Styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fetch from "../Api/Fetch.js";

const Register = () => {
  const submitHandler = async (e) => {
    console.clear();
    e.preventDefault();
    if (
      !fullNameValid ||
      !userNameValid ||
      !emailValid ||
      !phoneValid ||
      !passwordValid ||
      !confirmedPasswordValid
    ) {
      showBasicSwal("Error", "error", "Please fill in all fields correctly!");
    } else {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("phoneNumber", phoneNumber);
      formData.append("password", password);

      const url = `${import.meta.env.REACT_APP_API_BASE_URL}/Auth/Register`;

      var res = await Fetch(url, "POST", formData);

      if (res.success) {
        showBasicSwal(
          "Success",
          "success",
          "Registered successfully! Please look at your email for verification link.",
          6000
        );
        e.target.reset();
      } else {
        showBasicSwal("Error", "error", res.message);
      }
    }
  };

  const [fullName, setFullName] = useState("");
  const FullNameErrSpan = useRef("");
  const [fullNameErrDescription, setFullNameErrDescription] = useState("");
  const [fullNameValid, setFullNameValid] = useState(false);

  const [userName, setUserName] = useState("");
  const UserNameErrSpan = useRef("");
  const [userNameErrDescription, setUserNameErrDescription] = useState("");
  const [userNameValid, setUserNameValid] = useState(false);

  const [email, setEmail] = useState("");
  const EmailErrSpan = useRef("");
  const [emailErrDescription, setEmailErrDescription] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const PhoneErrSpan = useRef("");
  const [phoneErrDescription, setPhoneErrDescription] = useState("");
  const [phoneValid, setPhoneValid] = useState(false);

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
    if (fullName.length < 5 && fullName != "") {
      setFullNameValid(false);
      setFullNameErrDescription("Full Name must be at least 5 characters long");
      FullNameErrSpan.current.style.display = "inline-block";
    } else if (fullName == "") {
      setFullNameValid(false);
    } else {
      setFullNameValid(true);
      FullNameErrSpan.current.style.display = "none";
    }
  }, [fullName, setFullName]);

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
    if (!Email_Regex.test(email) && email != "") {
      setEmailValid(false);
      setEmailErrDescription("Invalid email address");
      EmailErrSpan.current.style.display = "inline-block";
    } else if (email == "") {
      setEmailValid(false);
    } else {
      setEmailValid(true);
      EmailErrSpan.current.style.display = "none";
    }
  }, [email, setEmail]);

  useEffect(() => {
    if (!Phone_Regex.test(phoneNumber) && phoneNumber != "") {
      setPhoneValid(false);
      setPhoneErrDescription("Invalid phone number");
      PhoneErrSpan.current.style.display = "inline-block";
    } else if (phoneNumber == "") {
      setPhoneValid(false);
    } else {
      setPhoneValid(true);
      PhoneErrSpan.current.style.display = "none";
    }
  }, [phoneNumber, setPhoneNumber]);

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

  // endregion

  return (
    <>
      <div className="registerContent authContent">
        <div className="registerCard authCard">
          <div className="authForm">
            <h1>
              <Link className="authLinks" to="/">
                MyApp
              </Link>
            </h1>
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <div className="authInputDiv">
                  <input
                    aria-invalid="true"
                    type="text"
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <span ref={FullNameErrSpan} className="authSpan">
                  {fullNameErrDescription}
                </span>
              </div>
              <div className="mb-3">
                <div className="authInputDiv ">
                  <input
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Username"
                    className="form-control"
                  />
                </div>
                <span ref={UserNameErrSpan} className="authSpan">
                  {userNameErrDescription}
                </span>
              </div>

              <div className=" mb-3">
                <div className="authInputDiv">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
                <span ref={EmailErrSpan} className="authSpan">
                  {emailErrDescription}
                </span>
              </div>

              <div className="mb-3">
                <div className="authInputDiv">
                  <input
                    type="tel"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <span ref={PhoneErrSpan} className="authSpan">
                  {phoneErrDescription}
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
                Register
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

export default Register;
