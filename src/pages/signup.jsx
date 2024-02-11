import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="create_account">
            <img src="/images/logo.svg" alt="logo" className="logo" />
            <h1 className="title">
                Create a free account to save your prefrences
            </h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">First name</label>
                    <input type="text" name="name" id="name" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" id="email" placeholder="Enter email address" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password" />
                </div>
                <div className="action_buttons">
                    <input type="submit" value="Create account" />
                </div>
            </form>

            <div>
                <p>Already have an account? <Link to="#" className="sign_in_link">Sign in</Link></p>
            </div>
        </div>
    );
}

export default SignUp;