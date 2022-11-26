import { createContext, useContext, useReducer } from 'react';
import { cartReducer, initCart } from '../reducers/cartReducer';

const cartContext = createContext();

const CartProvider = ({ children }) => {
    return <cartContext.Provider value={useReducer(cartReducer, initCart)}>{children}</cartContext.Provider>;
};

const useCartContext = () => {
    return useContext(cartContext);
};

export { cartContext, CartProvider, useCartContext };
