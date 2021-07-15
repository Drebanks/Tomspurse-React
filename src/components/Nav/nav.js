import classes from "./nav.module.css";
import { Link } from "react-router-dom";

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
    </nav>
  );
};

export default Navigation;