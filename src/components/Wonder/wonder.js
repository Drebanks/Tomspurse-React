import classes from "./wonder.module.css";

const Wonder = () =>{
    return (
        <div className={classes.whatcontainer}>
            <div className={classes.whatcontent}>
                <div className={classes.whatcon}>
                    <h1>Wondering How We Generate Funds?</h1>
                </div>
                <div className={classes.whatcont}>
                    <h3>REAL ESTATE</h3>
                    <p>Semper convallis magna vitae, sit proin. Ipsum tristique varius vivamus sed mi laoreet.</p>
                    <h3>AUTO MOBILE</h3>
                    <p>Register an account and fill in necessary information</p>
                    <h3>AGRICULTURE</h3>
                    <p>Register an account and fill in necessary information</p>
                    <h3>TRANSPORTATION</h3>
                    <p>Register an account and fill in necessary information</p>
                    <h3>LIQUID ASSETS</h3>
                    <p>Register an account and fill in necessary information</p>
                </div>
            </div>
        </div>
    );
};

export default Wonder;