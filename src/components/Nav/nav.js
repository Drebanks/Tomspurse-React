import classes from "./nav.module.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import Toggle from "../../assets/toggle.svg";
import { useState} from "react";
import { MenuList } from "./MenuList";
import Logo from "../../assets/Logo.svg";


const Navigation = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () =>{
    setClicked(!clicked);
  }
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={classes.tog} onClick={handleClick}>
        <img src={Toggle} alt="tog" />
      </div>
      <ul className={classes.menu}>
        {MenuList.map((item, index)=>
        (<li key={index}>
          <NavLink exact to={item.url} activeClassName={classes.active}>
            {item.title}
          </NavLink>
        </li>
        ))
      }
      </ul>
      {/* <ul className={classes.top}>
        <li>
          <a href="./index.html">HOME</a>
        </li>
        <li>
          <a href="#79">ABOUT US</a>
        </li>
        <li>
          <a href="./login.html">Login</a>
        </li>
        <li>
          <a href="#78">Dashboard</a>
        </li>
        <li>
          <a href="./signup.html" id="register">
            Register
          </a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navigation;