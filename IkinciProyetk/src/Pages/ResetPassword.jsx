import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <div className="resetPassContent authContent ">
        <div className="resetPassCard authCard">
          <div className="authForm">
            <h1>
              <Link className="authLinks" to="/">
                Home
              </Link>
            </h1>
            <h2>Reset Password</h2>
            <form>
              <div className="authInputDiv mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
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
