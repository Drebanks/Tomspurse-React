import "./login.css";
import Logo1 from "../../assets/Logo.svg";
import { Link } from "react-router-dom";



function Login() {
    return (
        <div className="app">
            <div className="appcontent">
                <div className="logocontainer">
                    <Link to="/" className="logg"><img src={Logo1}  alt="logo1" /> </Link>
                        <div className="logotext">
                            <h1 className="welcome">Welcome Back,</h1>
                            <p className="text">Login in here.</p>
                        </div>
                </div>
                <div className="formbg">
                    <form className="form">
                        <h1 className="login">Login to your account</h1>
                        <div className="formtype">
                            <label className="label" for="email">Email</label><br/>
                            <input type="text" name="email" className="br1" required></input><br/>
                            <label className="label" for="psw">Password</label><br/>
                            <input type="password"  name="psw" className="br" required></input>
                        </div>
                    </form>
                        <ul>
                            <li><a href="#0">Forgot password?</a></li>
                            <li class="new-user">
                                <Link to="/signup">
                                    New user? Register
                                </Link>
                            </li>
                        </ul>
                        <div className="loginbtn">
                            <Link to="/dashboard">
                                <button className="log">Login</button>
                            </Link>
                        </div>
                </div>         
            </div>
        </div>
            
    );

    
};

export default Login;