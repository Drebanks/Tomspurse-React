import classes from "./what.module.css";
import Bluecircle from "../../assets/Ellipse 69.svg";
import Blackring from "../../assets/Ellipse 70.svg";
import Smallring from "../../assets/Ellipse 73.svg";
import Bigring from "../../assets/Ellipse 74.svg";


const What = () => {
    return (
        <div className={classes.whatcontainer}>
            <div className={classes.whatext}>
                <h1>What Define Us.</h1>
            </div>
            <div className={classes.threeboxes}>
                <div className={classes.one}>
                    <div className={classes.oneimg}>
                        <img src={Bluecircle} alt="blue"/>
                        <img src={Blackring} alt="black"/>
                    </div>
                    <div className={classes.onetxt}>
                    <h2>Customer Satisfaction Obsession</h2>
                    <p>We are in business to make our customers happy and meet their needs. Meeting the needs of our customers is an act we value dearly.</p>
                    </div>
                </div>
                <div className={classes.secondbox}>
                    <div className={classes.twoimg}>
                        <img src={Bluecircle} alt="blue"/>
                        <img src={Smallring} alt="black"/>
                    </div>
                    <div className={classes.onetxt}>
                    <h2>Customer Satisfaction Obsession</h2>
                    <p>We are in business to make our customers happy and meet their needs. Meeting the needs of our customers is an act we value dearly.</p>
                    </div>
                </div>
                <div className={classes.thirdbox}>
                    <div className={classes.threeimg}>
                        <img src={Bluecircle} alt="blue"/>
                        <img src={Bigring} alt="black"/>
                    </div>
                    <div className={classes.onetxt}>
                    <h2>Customer Satisfaction Obsession</h2>
                    <p>We are in business to make our customers happy and meet their needs. Meeting the needs of our customers is an act we value dearly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default What;