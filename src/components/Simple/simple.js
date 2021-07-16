import classes from "./simple.module.css";
import Plus from "../../assets/plus.svg";


const Simple = () => {
    return(
        <div className={classes.simplecontainer}>
            <div className={classes.simp}>
                <h2>Simple, Transparent Plans</h2>
            </div>
            <div className={classes.simplebox}>
                <div className={classes.basic}>
                    <h2>Basic</h2>
                    <h3>7% for 2month</h3>
                    <p>Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                    <button className={classes.bget}>Get Started</button>
                    <div className={classes.end}>
                        <p className={classes.lint}>What’s Included</p>
                        <img src={Plus}  className={classes.lines} alt="plus"/>
                    </div>
                </div>
                <div className={classes.basic}>
                    <h2>Plus</h2>
                    <h3>22% for 6month</h3>
                    <p>Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                    <button className={classes.bget}>Get Started</button>
                    <div className={classes.end}>
                        <p className={classes.lint}>What’s Included</p>
                        <img src={Plus}  className={classes.lines} alt="plus"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Simple;