import  classes from "./customer.module.css";
import Man from "../../assets/Group 14.svg";


const Customer = () =>{
    return (
        <div className={classes.customcontainer}>
            <div className={classes.ourcontent}>
                <h1>Our Customer’s Above Finacial Freedom</h1> 
                <p>We’ll help you invest, save and spend responsibly for just $1, $2 or $3 per month. No surprise fees, just surprise upgrades</p>
            </div>
            <div className={classes.imgcont}>
                <div className={classes.imgtxt}>
                    <h2>Little About Tompurse</h2>
                    <p>In cursus ac turpis massa eu volutpat semper. Fringilla consequat aliquam ornare odio lectus condimentum proin lacus vitae. Adipiscing amet elementum, tempor dolor senectus dui. Aliquam viverra eget nunc mi posuere in morbi diam. Pellentesque sed quis ultrices fames. Pretium nec vulputate commodo eu adipiscing quis donec. Ultricies fames accumsan nibh ultricies purus a. Rutrum purus lectus egestas dui velit tellus. Ac eleifend amet tellus sit urna aliquet et magna eu. Arcu et nisl, dictum enim vestibulum adipiscing.</p>
                </div>
                <div className={classes.imgg}>
                    <img src={Man} alt="man"/>
                </div>
            </div>
            

        </div>
    );
};

export default Customer;