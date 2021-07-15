import Phone from "../../assets/Capture.PNG";
import classes from "./invest.module.css";
import Google from "../../assets/Googlebadge.svg";
import Apple from "../../assets/Applebadge.svg";


const Invest = () => {
    return (
        <div className={classes.investcontainer}>
            <div className={classes.invimg}>
                <img src={Phone} alt ="phone" />
            </div>
            <div className={classes.earn}>
                <h3>Invest.Earn</h3>
                <p>Our Company  non pretium eget etiam tempus. Vitae sollicitudin in vulputate montes, </p>
                <div className={classes.badges}>
                    <img src={Google} alt="gog"/>
                    <img src={Apple} alt="apple" />
                </div>
            </div>
        </div>
    );
};

export default Invest;