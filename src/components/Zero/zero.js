import classes from "./zero.module.css";
import Fin from "../../assets/finance.svg";
import Swift from "../../assets/swift.svg";
import Easy from "../../assets/easy.png";

const Zero = () => {
    return (
        <div className={classes.zerocontainer}>
            <div className={classes.zerocontent}>
                <h3>Zero Commissions</h3>
                <p>Our Company  non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes, </p>
            </div>
            <div className={classes.boxes}>
                <div className={classes.fin}>
                    <div className={classes.finimg}>
                        <img src={Fin} alt="fin"   />
                    </div>
                    <h3>Financial Stability</h3>
                    <p>Our Payment gateway is secured with military grade encryption </p>
                </div>
                <div className={classes.swift}>
                    <div className={classes.swfimg}>
                        <img src={Swift} alt="swf" />
                    </div>
                    <h3>Swift Payment</h3>
                    <p>Our Payment gateway is secured with military grade encryption </p>
                </div>
                <div className={classes.easy}>
                    <div className={classes.easyimg}>
                        <img src={Easy} alt="ease" />
                    </div>
                    <h3>Easy to Use</h3>
                    <p>Our Payment gateway is secured with military grade encryption </p>
                </div>
            </div>
        </div>
    );

};
export default Zero;