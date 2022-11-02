//data layer

//create the initialState with empty cart
export const initialState = {
  cart: [],
};

//build selector
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log('TYPE: ', action)
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        //original state
        ...state,
        //changes to the cart
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_YOUR_CART":
      //copy of current state
      let newCart = [...state.cart];

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index >= 0) {
        //id found remove 1 with that id
        newCart.splice(index, 1);
      }
      // else {
      //   console.warn(`product id: ${action.id} doesn't exists`);
      // }

      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};

export default reducer;
