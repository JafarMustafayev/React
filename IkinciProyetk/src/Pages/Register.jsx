import { Link } from "react-router-dom";

import "../Styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  return (
    <>
      <div className="registerContent authContent">
        <div className="registerCard authCard">
          <div className="authForm">
            <h1>
              <Link className="authLinks" to="/">
                Home
              </Link>
            </h1>
            <h2>Register</h2>
            <form>
              <div className="authInputDiv mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="authInputDiv mb-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                />
              </div>
              <div className="authInputDiv mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
              <div className="authInputDiv mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div className="authInputDiv mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="authInputDiv mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
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
