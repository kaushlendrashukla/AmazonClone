import { Link } from "react-router-dom"
import classes from "./Subheadder.module.css"
import AuthContext from "../Store/AuthContext"
import { useContext } from "react"

const SubHeadder = () => {
const authCtx = useContext(AuthContext)


    return <div className={classes.subheadder}>
          <Link to="/" className={classes.links}>Home</Link>
        <a>        Best Sellers</a>
        <a>        Mobiles</a>
        <a>        Customer Service</a>
        <a>        Today's Deals</a>
        <a>        Electronics</a>
        <Link to="/login" className={classes.links}>Login</Link>
        
    </div>
}

export default SubHeadder