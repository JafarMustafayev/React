import { Link } from "react-router-dom";

import "../Styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
  console.log(import.meta.env.REACT_APP_API_BASE_URL);

  return (
    <div className="forgotContent authContent ">
      <div className="forgotCard authCard">
        <div className="authForm">
          <h1>
            <Link className="authLinks" to="/">
              Home
            </Link>
          </h1>
          <h2>Forgot Password</h2>
          <form>
            <div className="authInputDiv mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
              />
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
