import classes from "./button.module.css";
import { Link } from "react-router-dom";

const Button = ({ children, href, extra }) => {
  return (
    <Link to={href} className={[classes.btn, extra].join(" ")}>
      {" "}
      {children}
    </Link>
  );
};

export default Button;