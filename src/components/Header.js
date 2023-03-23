
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'
import "./Header.css"
import CartContext from '../Store/Cart-context'



function Header() {
const cartCtx =  useContext(CartContext)
const numberOfCartItem = cartCtx.items.length;

    return (
        <nav className='header'>
            <div className='header__leftside'>
                <Link to="/">  <img className='header__logo' src="./images/amazon1.png" alt="logo" /></Link>
            </div>
            <div className='header__searchbar'>
                <input className='header__searchbarinput' placeholder='search product' />
                {/* <button className="header__searchbarbutton">Go</button> */}
            </div>
            <div className='header__rightside'>
                <div>
                    <Link to="/home" className='header__rightsidelinks'>
                        <span className='header__rightsidelinksPrimary'>hello shukla</span>
                        <span>Sign In</span>
                    </Link>
                </div>
                <div>
                    <Link to="/home" className='header__rightsidelinks'>
                        <span className='header__rightsidelinksPrimary'>Returns</span>
                        <span>& Orders</span>
                    </Link>
                </div>
                <div>
                    <Link to="/home" className='header__rightsidelinks'>
                        <span className='header__rightsidelinksPrimary'>Your</span>
                        <span>Prime</span>
                    </Link>
                </div>

                <div>
                    <button className="header__cartbutton" >
                        <span className="header__carticon">
                            <CartIcon />
                        </span>
                        {/* <span> Cart</span> */}
                        <span className="badge"> {numberOfCartItem} </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header