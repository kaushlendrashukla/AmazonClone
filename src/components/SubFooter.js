import classes from "./SubFooter.module.css";

const SubFooter = () => {

    return <div className={classes.container}>
        <div className={classes.backtotop}>Back To Top</div>
        <div className={classes.items}>
            <div className={classes.linkcoloumn}>
                <h4>Get to Know Us</h4>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Science</p>


            </div>
            <div className={classes.linkcoloumn}>
                <h4>Connect with Us</h4>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className={classes.linkcoloumn}>

                <h4>  Make Money with Us </h4>
                <p>      Sell under Amazon Accelerator     </p>
                <p>      Protect and Build Your Brand   </p>
                <p>       Sell on Amazon   </p>
                <p>      Amazon Global Selling   </p>
                <p>       Become an Affiliate   </p>
                <p>      Fulfilment by Amazon   </p>
                <p>      Advertise Your Products   </p>
                <p>      Amazon Pay on Merchants   </p>
            </div>
            <div className={classes.linkcoloumn}>

                <h4>  Let Us Help You  </h4>
                <p>   COVID-19 and Amazon</p>
                <p>   Your Account</p>
                <p>   Returns Centre</p>
                <p>   100% Purchase Protection</p>
                <p>   Amazon App Download</p>
                <p>   Help</p>
            </div>
        </div>
    </div>
}
export default SubFooter;
