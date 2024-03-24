import { Link } from "react-router-dom";

import "../Styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <>
      <div className="loginContent authContent ">
        <div className="loginCard authCard">
          <div className="authForm">
            <h1>
              <Link className="authLinks" to="/">
                Home
              </Link>
            </h1>
            <h2>Login</h2>
            <form>
              <div className="authInputDiv mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username or Email address"
                />
              </div>
              <div className="authInputDiv mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn ">
                Submit
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
