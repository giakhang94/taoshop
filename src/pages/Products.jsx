import CurrencyFormat from 'react-currency-format';
import HeroPage from '../components/HeroPage';
import { FiGrid } from 'react-icons/fi';
import { FaThList } from 'react-icons/fa';
import { useProductContext } from '../providers/ProductProvider';
import { ProductCard } from '../components';
import { useEffect, useState } from 'react';
import { useFilterContext } from '../providers/FilterProvider';

function Products() {
    const [inputValue, setInputValue] = useState('');
    const [productData, setProductData] = useState([]);
    const [state, dispatch] = useFilterContext();
    const data = useProductContext();
    useEffect(() => {
        setProductData(data);
    }, []);

    return (
        <div>
            <HeroPage title={'Products'} />
            <div className="content flex">
                <div className="left-side filter w-[20%]">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                dispatch({ type: 'SEARCH', value: e.target.value, data: data });
                                setProductData(state);
                            }}
                        />
                    </div>
                    <ul className="category">
                        <h3>Categorys</h3>
                        <li>All</li>
                        <li>Office</li>
                        <li>Living Room</li>
                        <li>Kitchen</li>
                        <li>Bedroom</li>
                        <li>Dining</li>
                        <li>Kids</li>
                    </ul>
                    <div className="company">
                        <h3>Company</h3>
                        <select>
                            <option value="">tao</option>
                        </select>
                    </div>
                    <div className="color">
                        <h3>Colors</h3>
                        <span>All</span>
                    </div>
                    <div className="">
                        <h3>Price</h3>
                        <CurrencyFormat value={1000} prefix="$" displayType="text" thousandSeparator={true} />
                        <input type="range" />
                    </div>
                </div>
                <div className="right-side flex flex-col justify-center">
                    <div className="sorter flex mb-10">
                        <FiGrid /> <FaThList />
                        <div>
                            {productData.length}
                            {productData.length <= 1 ? ' Product' : ' Products'} Found
                        </div>
                        <div>Sort By</div>
                    </div>
                    <div className="product-list grid laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 smallmobile:grid-cols-1">
                        {productData.length > 0 &&
                            productData.map((product) => {
                                return (
                                    <div className="mb-20" key={product.id}>
                                        <ProductCard title={product.name} src={product.image} price={product.price} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
