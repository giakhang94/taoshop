import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from '../providers/ProductProvider';
import ProductCard from './ProductCard';

function HomeFeature() {
    const [loading, setLoading] = useState(true);
    const data = useProductContext();
    const sliceData = data.slice(0, 3);
    return (
        <div className="feature">
            <h2 className="feature-title mt-12 text-center text-4xl font-bold tracking-[2px] text-[#102A42]">
                Featured Products
            </h2>
            <div className="my-20 product-list grid tablet:grid-cols-3 laptop:grid-cols-3 mobile:grid-cols-1, smallmobile:grid-cols-1">
                {sliceData.map((product) => {
                    console.log(product);
                    return <ProductCard title={product.name} price={product.price} src={product.image} />;
                })}
            </div>
            <Link to="/products" className="flex justify-center items-center">
                <span className="text-center text-white bg-[#AB7A5F] py-2 px-3 rounded-sm tracking-[1.5px]">
                    ALL PRODUCTS
                </span>
            </Link>
        </div>
    );
}

export default HomeFeature;
