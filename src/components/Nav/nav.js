import classes from "./nav.module.css";
import { Link } from "react-router-dom";
import Toggle from "../../assets/toggle.svg";

const Navigation = () => {
  return (
       <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/aboutus">About Us </Link>
        </li>
        <li>
          <Link to="/invest">Invest </Link>
        </li>
      </ul>
      <img src={Toggle} alt="tog" />
      <div className={classes.tog}>
        <ul className={classes.top}>
          <li><a href="./index.html">HOME</a></li>
          <li><a href="#79">ABOUT US</a></li>
          <li><a href="./login.html">Login</a></li>
          <li><a href="#78">Dashboard</a></li>
          <li><a href="./signup.html" id="register">Register</a></li>
        </ul>
    </div>
  </nav>
    
  );
};

export default Navigation;