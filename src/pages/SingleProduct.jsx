import { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ColorList, HeroPage, ProductImage, Separate, StarRating } from '../components';
import { Loading } from '../pages';
import { single_product_url } from '../constant';
import axios from 'axios';
import { useCartContext } from '../providers/CartProvider';
function SingleProduct() {
    const navigate = useNavigate();
    const [activeColor, setActiveColor] = useState('');
    const [cartState, cartDispatch] = useCartContext();
    const [loading, setLoading] = useState(true);
    const [dataProduct, setDataProduct] = useState({});
    const [count, setCount] = useState(1);
    const id = useParams();
    const url = single_product_url + id.id;
    const getActive = (color) => {
        setActiveColor(color);
    };
    // console.log('url', url);
    // console.log('data', dataProduct);
    useEffect(() => {
        async function fetchSingleProduct() {
            try {
                const resp = await axios(url, {
                    headers: { 'Access-Control-Allow-Origin': '*', accept: 'application/json' },
                });
                // console.log(resp);
                setDataProduct(resp.data);
                setLoading(false);
            } catch (error) {
                console.log(error.response);
            }
        }
        fetchSingleProduct();
    }, []);
    if (loading) {
        return <Loading />;
    } else {
        return (
            <div className="single-product ">
                <HeroPage title={dataProduct.name} products={true} />
                <button className="ml-5 mt-5 py-2 px-2 rounded-md bg-[#CAAD9B] text-white text-center font-semibold tracking-[1.5px] uppercase">
                    Back to products
                </button>
                <div className="flex tablet:flex-col mobile:flex-col smallmobile:flex-col laptop:flex-row laptop:items-center">
                    <div className="product-img tablet:w-full mobile:w-full smallmobile:w-full laptop:w-2/4">
                        <ProductImage image={dataProduct.images} />
                    </div>
                    <div className="product-content tablet:w-full mobile:w-full smallmobile:w-full laptop:w-2/4 py-5 px-5">
                        <h1 className="text-3xl font-bold text-[#102A42] tracking-[1.5px] uppercase mb-3">
                            {dataProduct.name}
                        </h1>
                        <StarRating rating={dataProduct.stars} reviews={dataProduct.reviews} />

                        <CurrencyFormat
                            className="text-[#AF7A5F] font-semibold text-2xl mb-3 block"
                            value={dataProduct.price}
                            displayType="text"
                            prefix="$"
                            thousandSeparator={true}
                        />
                        <p className="text-[#314D82] tracking[1.5px] leading-8 mb-3">{dataProduct.description}</p>
                        <div className="mb-3 flex justify-between">
                            <span className="text-[#102A42] font-bold tracking-[1.5px] w-[150px]">Available: </span>{' '}
                            <span className="flex-1">{dataProduct.stock > 0 ? 'In Stock' : 'Out Of Stock'}</span>
                        </div>
                        <div className="mb-3 flex">
                            <span className="text-[#102A42] font-bold tracking-[1.5px] w-[150px]">SKU: </span>{' '}
                            <span className="flex-1">{dataProduct.id}</span>
                        </div>
                        <div className="mb-3 flex">
                            <span className="text-[#102A42] font-bold tracking-[1.5px] w-[150px]">Brand: </span>{' '}
                            <span className="flex-1">{dataProduct.company}</span>
                        </div>
                        <Separate />
                        <ColorList colors={dataProduct.colors} getActive={getActive} />
                        <div className="addCart flex flex-col justify-center">
                            <div className="flex items-center justify-center">
                                <span
                                    onClick={() => {
                                        if (count >= 1) {
                                            setCount((prev) => prev - 1);
                                        }
                                    }}
                                    className="text-3xl cursor-pointer"
                                >
                                    -
                                </span>
                                <span className="text-4xl mx-2">{count}</span>
                                <span
                                    className="text-2xl cursor-pointer"
                                    onClick={() => {
                                        setCount((prev) => prev + 1);
                                    }}
                                >
                                    +
                                </span>
                            </div>

                            <span
                                type="button"
                                onClick={(e) => {
                                    cartDispatch({
                                        type: 'ADD_CART',
                                        data: { product: dataProduct, count: count, color: activeColor },
                                    });
                                    navigate('/checkout');
                                }}
                                className="text-white text-center cursor-pointer font-semibold tracking-[1.5px] py-1 px-2 bg-[#8F654F] rounded-sm w-full"
                            >
                                Add to cart
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleProduct;
