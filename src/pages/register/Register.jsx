import "./register.scss"
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h1 className="registerHeader">Newsbook</h1>
          <p>Connect wth friends and the world around you on Newsbook.</p>
        </div>
        <div className="registergRight">
          <form action="" className="registerForm">
            <input type="text" placeholder="username " />
            <input type="text" placeholder="Email " />
            <input type="password" placeholder="password " />

            <button className="registerBtn">Register</button>
          </form>
          {/* <Link to="#" className="forgotLink">Forgot Password?</Link> */}
          <Link to="/login" className="createLink">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register