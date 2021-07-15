import Keys from "../../assets/key.svg";
import classes from "./key.module.css";
import Keycir from "../../assets/circle.svg"
const Key = () => {
    return(
        <div className={classes.keycontainer}>
            <div className={classes.keypad}>
                <div className={classes.keycir}>
                    <img src={Keycir} alt="circle" />
                </div>
                <div className={classes.keylock}>
                    <img src={Keys} alt="keyy" />
                </div>
            </div>
            <div className={classes.keycontent}>
                <h2>Security that's strong as oak</h2>
                <p>All your data is protected by bank-level security and 256-bit encryption.</p>
                <a href="#">Learn more</a>
                <h5>Our Company  non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes, </h5>
            </div>
        </div>
    );
};

export default Key;