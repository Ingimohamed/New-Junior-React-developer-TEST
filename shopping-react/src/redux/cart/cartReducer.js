import { BUY_PRODUCT } from "./cartTypes"

const initialState = {
    cartProducts:0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PRODUCT: return {
            ...state,
            cartProducts: state.cartProducts + 1,
        }
        default:return state
   }
}

export default cartReducer;

