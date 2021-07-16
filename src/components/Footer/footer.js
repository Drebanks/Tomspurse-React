import classes from "./footer.module.css";
import Tom from "../../assets/Vertical.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/insta.svg";
import Twitter from "../../assets/twitter.svg";
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <div className={classes.footercontainer}>
            <div className={classes.topfoot}>
                <h4>Total control, total freedom. <br />Be invested.</h4>
                <Link to="./signup">
                    <button className={classes.got}>Get started</button>
                </Link>
                <div className={classes.boxoverall}>
                    <div className={classes.boxcont}>
                        <div className={classes.box1}></div>
                        <div className={classes.box2}></div>
                    </div>
                    <div className={classes.box3}></div>
                </div>
            </div>
            <div className={classes.teaminfo}>
                <div className={classes.tomlogo}>
                    <img src={Tom} alt="logo"/>
                </div>
                <div className={classes.info}>
                    <div className={classes.first}>
                        <p>Company</p>
                        <ul >
                            <li><a href="./">Home</a></li>
                            <li><a href="./aboutus">About Us</a></li>
                            <li><a href="#15">Investment Plan</a></li>
                            <li><a href="#16">Mail Us</a></li>
                        </ul>
                    </div>
                    <div className={classes.second}>
                        <p>Product.</p>
                        <ul >
                            <li><a href="#17">Savings Plan</a></li>
                            <li><a href="#18">Value Plan</a></li>
                        </ul>
                    </div>
                    <div className={classes.third}>
                        <p>Quick links.</p>
                        <ul >
                           <li> <Link to="./signup">Create an account</Link></li>
                           <li> <Link to="./login">Log in</Link></li>
                           <li> <Link to="#">Instructions</Link></li>
                        </ul>
                    </div>
                    <div className={classes.fourth}>
                        <p>Connect</p>
                        <div className={classes.social}>
                            <a href="#"><img src={Facebook} alt="fb" /></a>
                            <a href="#"><img src={Twitter} alt="twit" /></a>
                            <a href="#"><img src={Instagram} alt="insta" /></a>
                        </div>
                        <ul>
                            <li><a href="#">support@tompurse.com</a></li>
                            <li>+2345685921</li>
                        </ul>
                         <p>Suite C201, Plot 1245 <br />Adetokunbo Ademola <br />Crescent,Wuse 2, Abuja, FCT</p>
                    </div>
                </div>
            </div>
            <div className={classes.lastinfo}>
                <p>
                    By using this website, you accept our Terms of Use and Privacy Policy
                    and acknowledge receipt of all disclosures in our Disclosure Library .
                    All agreements are available in our Agreement Library. M1 relies on
                    information from various sources believed to be reliable, including
                    clients and third parties, but cannot guarantee the accurac
                </p>
                {/* <p>
                    By using this website, you accept our Terms of Use and Privacy Policy
                    and acknowledge receipt of all disclosures in our Disclosure Library .
                    All agreements are available in our Agreement Library. M1 relies on
                    information from various sources believed to be reliable, including
                    clients and third parties, but cannot guarantee the accurac
                </p> */}
            </div>
        </div>

    );
};

export default Footer;