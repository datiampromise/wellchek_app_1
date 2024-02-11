import { Link } from "react-router-dom";

const ResetLinkSent = () => {
  return (
    <div className="create_account">
      <div className="logo_position">
        <Link to="/">
          <img
            src="/images/WELLCHEK.svg"
            alt="logo"
            className="logo_absolute"
          />
        </Link>
        <span>
          <img src="/images/cross.png" alt="logo" className="logo_absolute" />
        </span>
      </div>
      <h1 className="title">Log into your account</h1>
      <div className="reset_field">
        <img src="/images/forgotten_password.png" alt="logo" />
        <p className="reset_message">
          A link to reset password has been sent to your mail -
          da*******y@gmail.com
        </p>
      </div>
      <div className="action_buttons">
        <input type="submit" value="Login" />
      </div>
    </div>
  );
};

export default ResetLinkSent;
