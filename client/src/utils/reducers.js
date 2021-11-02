import { useReducer } from "react";

import {
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  UPDATE_PRODUCTS,
  TOGGLE_CART,
} from "./actions";

const initialState = {
  cart: [],
  cartOpen: false,
  products: [],
  categories: [],
  currentCategory: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // if check action.type and, return a new state object with an appropriately updated products array
    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    // else do not update state
    default:
      return state;
  }
};

// export function useProductReducer(initialState) {
//     return useReducer(reducer, initialState);
// };

export default reducer;
