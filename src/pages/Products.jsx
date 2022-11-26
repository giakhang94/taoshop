import CurrencyFormat from 'react-currency-format';
import HeroPage from '../components/HeroPage';
import { FiGrid } from 'react-icons/fi';
import { FaThList } from 'react-icons/fa';
import { useProductContext } from '../providers/ProductProvider';
import { colorClass, ProductCard } from '../components';
import { useEffect, useRef, useState } from 'react';
import { useFilterContext } from '../providers/FilterProvider';
import { categories_list, color_list, company_list } from '../constant';
import Loading from './Spinner';

function Products() {
    const searchRef = useRef();
    const [loading, setLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [priceInput, setPriceInput] = useState(550000);
    const [productData, setProductData] = useState([]);
    const [state, dispatch] = useFilterContext();
    const [filter, setFilter] = useState({
        category: 'all',
        company: 'all',
        color: 'all',
        price: 550000,
    });
    let { category, company, color, price } = filter;

    const data = useProductContext();
    useEffect(() => {
        setProductData(data);
        setLoading(false);
    }, [data]);
    useEffect(() => {
        // console.log(color);
        dispatch({ type: 'FILTER', category, company, color, price, data: data });
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, company, color, price]);
    useEffect(() => {
        setProductData(state);
        setLoading(false);
    }, [state]);
    console.log(filter);
    return (
        <div>
            <HeroPage title={'Products'} />
            <div className="content flex">
                <div className="left-side filter-sticky filter min-w-[300px] w-[20%] px-5 py-5 ml-10">
                    <div className="search border border-gray-300 rounded px-1 py-1 mb-3">
                        <input
                            ref={searchRef}
                            type="text"
                            placeholder="Search"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                dispatch({ type: 'SEARCH', data: data, value: e.target.value });
                            }}
                        />
                    </div>
                    <ul className="category text-[#97A9BB] mt-2 mb-3">
                        <h3 className="font-bold text-[#102A42] tracking-[1.5px]">Categories</h3>
                        {categories_list.map((category) => {
                            return (
                                <li
                                    className={`pl-2 mb-1 tracking-[1.5] cursor-pointer capitalize ${
                                        category === filter.category ? 'active-category' : ''
                                    }`}
                                    onClick={(e) => {
                                        setInputValue('');
                                        setFilter((prev) => ({ ...prev, category: category }));
                                    }}
                                >
                                    {category}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="company mb-3">
                        <h3 className="font-bold text-[#102A42] tracking-[1.5px]">Company</h3>
                        <select
                            className="shadow-md shadow-gray-300 min-w-[100px] text-sm"
                            onChange={(e) => {
                                setFilter((prev) => ({ ...prev, company: e.target.value }));
                            }}
                        >
                            {company_list.map((company, index) => {
                                return (
                                    <option key={index + 'company'} value={company}>
                                        {company}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="color mb-3">
                        <h3 className="font-bold text-[#102A42] tracking-[1.5px] mt-2 mb-1">Colors</h3>
                        <div className="flex items-center">
                            <span
                                className="mr-1"
                                onClick={() => {
                                    setFilter((prev) => ({ ...prev, color: 'all' }));
                                }}
                            >
                                All
                            </span>
                            {color_list.map((color, index) => {
                                return (
                                    <button
                                        key={index + 'color'}
                                        onClick={() => {
                                            setFilter((prev) => ({ ...prev, color: color }));
                                        }}
                                        className={`${
                                            color === filter.color ? 'color-active' : ''
                                        } mx-1 w-[15px] h-[15px] block rounded-[50%] opacity-80 color-${colorClass(
                                            color,
                                        )}`}
                                    ></button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="">
                        <h3 className="font-bold text-[#102A42] tracking-[1.5px]">Price</h3>
                        <div className="flex items-center space-x-2">
                            <CurrencyFormat value={priceInput} prefix="$" displayType="text" thousandSeparator={true} />
                            <input
                                type="range"
                                min="1000"
                                max="550000"
                                step="1000"
                                value={priceInput}
                                onChange={(e) => {
                                    setPriceInput(e.target.value);
                                    setFilter((prev) => ({ ...prev, price: e.target.value }));
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="right-side flex flex-col justify-center">
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            <div className="sorter flex mb-10">
                                {/* <FiGrid /> <FaThList /> */}
                                <div className="mx-6 mt-5 text-lg font-semibold tracking-[1.5px] text-[#324D67]">
                                    {productData.length}
                                    {productData.length <= 1 ? ' Product' : ' Products'} Found
                                </div>
                                {/* <div>Sort By</div> */}
                            </div>
                            <div className="product-list grid laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 smallmobile:grid-cols-1">
                                {productData.length > 0 &&
                                    productData.map((product) => {
                                        return (
                                            <div className="mb-20" key={product.id}>
                                                <ProductCard
                                                    title={product.name}
                                                    src={product.image}
                                                    price={product.price}
                                                    id={product.id}
                                                />
                                            </div>
                                        );
                                    })}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;
