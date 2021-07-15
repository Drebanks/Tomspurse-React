import classes from "./guide.module.css";
import Invest from "../../assets/invest 2.svg";
import Later from "../../assets/Later 2.svg";
import Grow from "../../assets/Grow 2.png";

const Guide = () => {
    return(
        <div className={classes.guidecontainer}>
            <div className={classes.guidecontent}>
                <div className={classes.gide}>
                    <h1>Your guide to financial wellness</h1>
                    <p>We’ll help you invest, save and spend responsibly for just $1, $2 or $3 per month. No surprise fees, just surprise upgrades</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
            <div className={classes.investcontainer}>
                <div className={classes.invest}>
                    <div className={classes.img}>
                        <img src={Invest} alt="inv" />
                    </div>
                    <div className={classes.imgword}>
                        <h3>Invest your spare change</h3>
                        <p>Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                    </div>
                </div>
                <div className={classes.invest}>
                    <div className={classes.img}>
                        <img src={Later} alt="late" />
                    </div>
                    <div className={classes.imgword}>
                        <h3>Save for later</h3>
                        <p>Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                    </div>
                </div>
                <div className={classes.inves}>
                    <div className={classes.img}>
                        <img src={Grow} alt="grw" />
                    </div>
                    <div className={classes.imgword1}>
                        <h3>Grow your knowledge</h3>
                        <p>Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Guide;