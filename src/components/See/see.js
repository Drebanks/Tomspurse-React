import classes from "./see.module.css";
import Right from "../../assets/rightarr.png";
import Left from "../../assets/left.png";
import Ring from "../../assets/ring.png";
import Image1 from "../../assets/image54.png";
import Image2 from "../../assets/apos.png"
import Image3 from "../../assets/image52.png";
import Image5 from "../../assets/image53.svg";

const See = () => {
    return (
        <div className={classes.seecontainer}>
            <div className={classes.seecontent}>
                <img src={Left} alt="arr"/> 
                <h3>See what others have to say</h3>
                <img src={Right} alt="arr"/>
            </div>
            <div className={classes.seeimg}>
                <img src={Ring} alt="circle" />
                <img src={Ring} alt="circle" />
                <img src={Ring} alt="circle" />
            </div>
            <div className={classes.boxcontainer}>   
                <div className={classes.boximg}>
                    <div className={classes.boxone}>
                        <img src={Image1} alt="avatar" />
                        <h5>Kolawole Tobi</h5>
                        <img src={Image2} alt="com" />
                        <p> Ultricies quis commodo ac at sed at sagittis risus ultrices. Arhoncus in adipiscing malesua.</p>
                    </div>
                </div>
                <div className={classes.boximg2}>
                    <div className={classes.boxone2}>
                        <img src={Image3} alt="avatar" />
                        <h5>Kolawole Tobi</h5>
                        <img src={Image2} alt="com" />
                        <p> Ultricies quis commodo ac at sed at sagittis risus ultrices. Arhoncus in adipiscing malesua.</p>
                    </div>
                </div>
                <div className={classes.boximg3}>
                    <div className={classes.boxone3}>
                        <img src={Image5} alt="avatar" />
                        <h5>Kolawole Tobi</h5>
                        <img src={Image2} alt="com" />
                        <p> Ultricies quis commodo ac at sed at sagittis risus ultrices. Arhoncus in adipiscing malesua.</p>
                    </div>
                </div>
            </div>
        </div>
        

        
        
    );
};

export default See;