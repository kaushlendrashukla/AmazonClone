import classes from "./Footer.module.css"

const Footer = () => {


    return <div className={classes.footer}>
        <div className={classes.conditions}>
    <a href="#"> Conditions of Use & Sale </a>
    <a href="#">     Privacy Notice </a>
    <a href="#">      Interest-Based Ads </a>
    </div>
    <div className={classes.year}>
    <p>  © 1996-2023, Amazon.com, Inc. or its affiliates </p>
    </div>

    </div>
}

export default Footer;