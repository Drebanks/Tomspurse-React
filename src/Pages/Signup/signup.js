import classes from "./signup.module.css";
import {Link} from "react-router-dom";

const Signup = () => {
    return (
        <div className={classes.signupcontainer}>
            <div className={classes.signuptext}>
                <h1 className={classes.clue}>Welcome ,</h1>
                <h2 className={classes.clos}>Register in to continue.</h2>
            </div>
            <div className={classes.formcontainer}>
                <form className={classes.formcontent}>
                    <h3 className={classes.hut}>Login to your account</h3>
                    <div className="formtype">
                        <div className={classes.full}>
                            <label className={classes.tet} for="fullname">Full Name</label><br/>
                            <div className={classes.last}>
                                <input type="text" name="name" placeholder="First Name" className={classes.bet} required></input>
                                <input type="text" name="name" placeholder="Last Name" className={classes.bet} required></input><br/>
                            </div>
                        </div>
                        <div className={classes.cul}>
                            <label className={classes.tet} for="email">Email</label><br/>
                            <input type="text" name="email" placeholder="tobbey@email.com" className={classes.best} required></input><br/>
                            <label className={classes.tet} for="psw">Password</label><br/>
                            <input type="password"  name="psw"  className={classes.best} required></input><br/>
                            <label className={classes.tet} for="psw">Confirm, Password</label><br/>
                            <input type="password"  name="psw"  className={classes.best} required></input><br/>
                        </div>
                        <div className={classes.old}>
                            <Link to="/login">Old User? Login</Link>
                        </div>
                        <div className={classes.try}>
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