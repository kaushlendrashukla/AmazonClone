import React, { useContext } from 'react'
import "./CheckoutProduct.css"
import CartContext from '../Store/Cart-context'

function CheckoutProduct({ id, title, image, price }) {

    const cartCtx = useContext(CartContext);

    const removeFromCartHandler = () => {
        cartCtx.removeItem({ id: id })
    }
    return (
        <div className='checkoutProduct'>

            <img className='checkoutProduct__img' src={image} alt="kfkds" />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>{`₹ ${price}`}</p>
                {/* <button onClick={removeFromCartHandler(id)}>Remove from cart</button> */}
                <button onClick = {removeFromCartHandler} >Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct