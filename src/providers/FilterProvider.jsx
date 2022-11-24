import { createContext, useContext, useReducer } from 'react';
import { filterReducer, initFilter } from '../reducers/filterReducer';

const filterContext = createContext();

const FilterProvier = ({ children }) => {
    return <filterContext.Provider value={useReducer(filterReducer, initFilter)}>{children}</filterContext.Provider>;
};

const useFilterContext = () => {
    return useContext(filterContext);
};

export { useFilterContext, FilterProvier, filterContext };
