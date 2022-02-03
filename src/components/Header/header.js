import Logo from "../../assets/Logo.svg";
import Navigation from "../Nav/nav";
import classes from "./header.module.css";
import Button from "../Button/button";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header_container}>
                {/* <Link to="./"><img src={Logo} alt="Logo" /></Link> */}
                <Navigation />
                {/* <div className={classes.togg}>
                    <div className={classes.lin}>
                    <Link to="/login">Login</Link>
                    </div>
                    <div className={classes.let}>
                    <Button href="/signup" extra={classes.getstarted}>
                    {" "}
                    Get Started
                    </Button>
                    </div>
                </div> */}
            </div>
        </header>
    );
};

export default Header;