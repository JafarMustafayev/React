import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Email_Regex } from "../Utils/Regex.js";
import { showBasicSwal } from "../Contents/alert.js";

import "../Styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
  console.log(import.meta.env.REACT_APP_API_BASE_URL);

  const [email, setEmail] = useState("");
  const EmailErrSpan = useRef("");
  const [emailErrDescription, setEmailErrDescription] = useState("");
  const [emailValid, setEmailValid] = useState(false);

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

  const submitHandler = (e) => {
    e.preventDefault();

    if (!emailValid) {
      showBasicSwal("Error", "error", "Please fill in all fields correctly!");
    } else {
      showBasicSwal("Success", "success", "Email sent successfully!");
    }
  };
  return (
    <div className="forgotContent authContent ">
      <div className="forgotCard authCard">
        <div className="authForm">
          <h1>
            <Link className="authLinks" to="/">
              MyApp
            </Link>
          </h1>
          <h2>Forgot Password</h2>
          <form onSubmit={submitHandler}>
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

            <button type="submit" className="btn ">
              Send Email
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
  );
};

export default ForgotPassword;
