import "./login.scss";
import {Link} from  "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
      <div className="loginLeft">
        <h1 className="loginHeader">Newsbook</h1>
        <p>Connect wth friends and the world around you on Newsbook.</p>
      </div>
      <div className="logingRight">
        <form action="" className="loginForm">
            <input type="text" placeholder="Email " />
            <input type="password" placeholder="password " />
            <button className="loginBtn">LogIn</button>
        </form>
        <Link to="#" className="forgotLink">Forgot Password?</Link>
        <Link to="/register" className="createLink">Create a New Account </Link>
      </div>
      </div>
    </div>
  )
}

export default Login