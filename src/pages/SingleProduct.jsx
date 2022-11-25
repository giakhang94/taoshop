import { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useParams } from 'react-router-dom';
import { ColorList, HeroPage, ProductImage, Separate } from '../components';
import { single_product_url } from '../constant';

function SingleProduct() {
    const [dataProduct, setDataProduct] = useState({});
    const [count, setCount] = useState(1);
    const id = useParams();
    const url = single_product_url + id.id;
    console.log('url', url);
    console.log('data', dataProduct);
    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setDataProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSingleProduct();
    }, [url]);
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
                    <ColorList colors={dataProduct.colors} />
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
                        <button className="text-white font-semibold tracking-[1.5px] py-1 px-2 bg-[#8F654F] rounded-sm">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
