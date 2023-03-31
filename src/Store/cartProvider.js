import { useReducer } from 'react';
import CartContext from './Cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  else if (action.type === "REMOVE") {

    let updatesvalue = state.items.filter((i) =>{
    
      return i.id != action.id.id
    })

    return {
      items:updatesvalue,
     
    }
  }

  else return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
    
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
   
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;