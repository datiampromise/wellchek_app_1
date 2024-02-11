import { Link } from "react-router-dom";

const ResetPassword = () => {
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
      <h1 className="title">Create a new password</h1>
      <form>
        <div className="form-group">
          <label htmlFor="new_password">Enter new password</label>
          <input
            type="new_password"
            name="new_password"
            id="new_password"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">confirm new password</label>
          <input
            type="confirm_password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Enter your password"
          />
        </div>
        <div className="action_buttons">
          <input type="submit" value="Reset password" />
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
