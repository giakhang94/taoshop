import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductProvider } from './providers/ProductProvider';
import { FilterProvier } from './providers/FilterProvider';
import { CartProvider } from './providers/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ProductProvider>
            <FilterProvier>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterProvier>
        </ProductProvider>
    </React.StrictMode>,
);
