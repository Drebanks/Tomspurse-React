import classes from "./login.module.css";
import Logo1 from "../../assets/Logo.svg";
import { Link } from "react-router-dom";



function Login() {
    return (
        <div className={classes.overall}>
        <div className={classes.left}>
            <Link to="./index.html"><img src={Logo1} alt="Tomspurse Logo" /></Link>
            <h1>Welcome Back,</h1>
            <h2>Log in to continue.</h2>
        </div>
        <div className={classes.right}>
            <div className={classes.box}>
                <h3>Login to your account</h3>
                <form>
                <label className={classes.label1} for="input1"> Email 
                    <br/>
                    <br/>
                    <input type="email" required id="input1" />
                </label>
                <br/>
                <label className={classes.label2} for="input2">
                    Password
                    <br/>
                    <br/>
                    <input type="password" required id="input2"/>
                </label>
                <ul>
                    <li><a href="#0">Forgot password?</a></li>
                    <li className={classes.newuser}><Link to="./#">New user? Register</Link></li>
                </ul>
                <br/>
                <div className={classes.tro}>
                    <button className={classes.button}>Log in</button>
                </div>
                </form>
            </div>
        </div>

    </div>
            
    );

    
};

export default Login;