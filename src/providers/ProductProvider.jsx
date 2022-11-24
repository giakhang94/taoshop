import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { productReducer } from '../reducers/productReducer';
import { products_url } from '../constant';

const productContext = createContext();
const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const resp = await fetch(products_url);
                const data = await resp.json();
                console.log(data);
                setProductData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, []);
    return <productContext.Provider value={productData}>{children}</productContext.Provider>;
};
const useProductContext = () => {
    return useContext(productContext);
};
export { useProductContext, productContext, ProductProvider };
