import classes from "./signup.module.css";
import {Link} from "react-router-dom";

const Signup = () => {
    return (
        <div className={classes.signupcontainer}>
            <div className={classes.signuptext}>
                <h1>Welcome ,</h1>
                <h2>Register in to continue.</h2>
            </div>
            <div className={classes.formcontainer}>
                <form className={classes.formcontent}>
                    <h3>Login to your account</h3>
                    <div className="formtype">
                        <div className={classes.full}>
                            <div className={classes.name}>
                                <label className={classes.tet} for="fullname">Full Name</label><br/>
                                <input type="text" name="name" placeholder="First Name" className={classes.bet} required></input>
                            </div>
                            <div className={classes.last}>
                                <label className={classes.tet} for="fullname"></label><br/>
                                <input type="text" name="name" placeholder="Last Name" className={classes.bet} required></input><br/>
                            </div>
                        </div>
                        <label className={classes.tet} for="email">Email</label><br/>
                        <input type="text" name="email" placeholder="tobbey@email.com" className={classes.bet} required></input><br/>
                        <label className={classes.tet} for="psw">Password</label><br/>
                        <input type="password"  name="psw"  className={classes.best} required></input><br/>
                        <label className={classes.tet} for="psw">Confirm, Password</label><br/>
                        <input type="password"  name="psw"  className={classes.best} required></input><br/>
                        <div className={classes.old}>
                            <Link to="/login">Old User? Login</Link>
                        </div>
                        <div className={classes.logup}>
                            <Link to="/dashboard">
                                <button className={classes.set}>Login</button>
                            </Link>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Signup;