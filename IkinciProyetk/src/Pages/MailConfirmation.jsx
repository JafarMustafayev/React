import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Fetch from "../Api/Fetch.js";
const MailConfirmation = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const email = urlParams.get("email");

  const [resMessage, setResMessage] = useState("");

  var navigator = useNavigate();

  const fetchToBack = async () => {
    const url = `${import.meta.env.REACT_APP_API_BASE_URL}/Auth/ConfirmEmail`;

    var formData = new FormData();
    formData.append("token", token);
    formData.append("email", email);

    var res = await Fetch(url, "POST", formData);

    if (res.success == false) {
      setResMessage(<h3>{res.message}</h3>);
    } else {
      setResMessage(
        <h3>
          Your mail has been confirmed. You can{" "}
          <Link className="authLinks" to="/login">
            login
          </Link>{" "}
          now.
        </h3>
      );
    }
  };

  useEffect(() => {
    if (token && email) {
      fetchToBack();
    } else {
      navigator("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, email]);

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
            <h2>Mail Confirmation</h2>

            <div className="mb-3">{resMessage}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailConfirmation;
