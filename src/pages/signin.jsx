import { Link } from "react-router-dom";

const Signin = () => {
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
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
            <p className="forgot_password">
              <Link to="/login/forgot" className="forgot_password">
                Forgot password?
              </Link>
            </p>
          </div>
          <div className="action_buttons">
            <input type="submit" value="Login" />
          </div>
        </form>

        <div>
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="sign_in_link">
              Create account
            </Link>
          </p>
        </div>
      </div>
    );
}

export default Signin;