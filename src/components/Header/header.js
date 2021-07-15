import Logo from "../../assets/Logo.svg";
import Navigation from "../Nav/nav";
import classes from "./header.module.css";
import Button from "../Button/button";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header_container}>
                <img src={Logo} alt="Logo" />
                <Navigation />
                <Link to="/login">Login</Link>
                <Button href="/signup" extra={classes.getstarted}>
                {" "}
                Get Started
                </Button>
            </div>
        </header>
    );
};

export default Header;