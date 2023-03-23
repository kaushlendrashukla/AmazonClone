import React, {useContext} from 'react'
import "./Product.css"
import CartContext from '../Store/Cart-context';
import Cart from './Cart';

function Product({id, title, image, price, rating}) {
 const cartCtx  = useContext(CartContext)

 const addToCartHandler = amount => {
    cartCtx.addItem({
        id:id,
        title:title,
        image:image,
        price: price,
    })
 }

const removeToCartHandler = id => {
    cartCtx.removeItem({id})
}
    return (
        <div className='product'>
            <div className='product__container' >
            <p>{title}</p>
            <p className='product__price'>{`₹ ${price}`}</p>
            <div className='product__rating'>
                {
                    Array(rating).fill().map((_) => <p>⭐</p>)
                }
            </div>
            </div>
            <div className='product__lowerdiv'>
            <img className='Product__image' src={image} alt="img"/>
            <button onClick={addToCartHandler}>Add to cart</button>
             
             </div>    
        </div>



    )
}

export default Product