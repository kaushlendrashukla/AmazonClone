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
console.log("added")
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  else if (action.type === "REMOVE") {
    // const updateditems =  state.items.filter((c) => c.id !== action.id)
    // return   {
     
    //   items: updateditems,
    // }
console.log("removed")
    // let newCart = [...state.items]
    // const index = state.items.findIndex((item) => item.id == action.id)

    // if(index >=0) {
    //   newCart.splice(index,1)
    // }
    let updatesvalue = state.items.filter((i) =>{
      console.log(i.id)
      console.log(action.id.id)
      return i.id != action.id.id
    })
    console.log(state)
    console.log(action.id)
    console.log(updatesvalue)
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
    console.log(item)
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
    console.log(id)
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