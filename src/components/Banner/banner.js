// import Button from "../../Button/button";
import classes from "./banner.module.css";
import Toup from "../../assets/ToUp.svg";
import {Link} from "react-router-dom";

const Banner = () => {
  
  return (
    <div className={classes.banner}>
        <div className={classes.container}>
            <div className={classes.content}>
                <h1>Save Invest & Earn Anywhere !</h1>
                <p>
                    Ipsum massa at cursus lacus erat lacus magna volutpat habitasse. Eu
                    mauris et .
                </p>
               <Link to="/signup">
                   <button className={classes.getstarted}>Get Started</button>
               </Link>
            </div>

            <div className={classes.hand}>
                <img src={Toup} alt="iphone" />
            </div>
        </div>
    </div>
  );    
};

export default Banner;