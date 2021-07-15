import Logo22 from "../../assets/Vertical.svg";
import classes from "./sidebar.module.css";
import {Link} from "react-router-dom";
import Dash from "../../assets/Home.png";
import Instruction from "../../assets/noun.svg";
import Investment from "../../assets/savings.png";
import Profile from "../../assets/profile.png";
import Referral from "../../assets/referral.svg";
import Settings from "../../assets/settings.svg";

const Sidebar = () => {
    return (
        <div className={classes.sidebarcontainer}>
            <div className={classes.sidebarcontent}>
                <img src={Logo22} alt="logo"/>
            </div>
            <div className={classes.sidebar}>
                <ul>
                    <li><Link to="./dashboard"><img src={Dash} alt="dash" />Dashboard</Link></li>
                    <li><Link to="./instruction"><img src={Instruction} alt="ins" />Instruction</Link></li>
                    <li><Link to="./investment"><img src={Investment} alt="sav" />Investment</Link></li>
                    <li><Link to="./profile"><img src={Profile} alt="pro" />Profile</Link></li>
                    <li><Link to="./referral"><img src={Referral} alt="ref" />Referral</Link></li>
                    <li><Link to="./settings"><img src={Settings} alt="set" />Settings</Link></li>
                </ul>
            </div>
            <Link to="/">
            <buttton className={classes.logbtn}>Logout</buttton>
            </Link>
                
        </div>
    );
};

export default Sidebar;