import colorClass from './colorClass';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useCartContext } from '../providers/CartProvider';

export default function CheckoutThumb({ data }) {
    const [state, cartDispatch] = useCartContext();
    return (
        <div className="checkout-item mx-3 flex tablet:flex-row laptop:flex-row mobile:flex-col smallmobile:flex-col items-center mb-6 ">
            <div className="thumb h-[60px]  tablet:w-[40%] laptop:w-[40%] mobile:w-full smallmobile:w-full rounded-lg min-w-[70px] overflow-hidden">
                <div className="h-full relative">
                    <img src={data.product.images[0].url} className=" rounded-md w-fit object-cover" alt="" />
                    <span
                        onClick={() => {
                            cartDispatch({ type: 'REMOVE_CART', id: data.product.id, color: data.color });
                        }}
                        className="absolute top-0 right-0 cursor-pointer text-[#AB7B60] text-lg font-semibold"
                    >
                        <AiFillCloseCircle />
                    </span>
                </div>
            </div>
            <div className="tablet:w-[60%] laptop:w-[60%] mobile:w-full smallmobile:w-full">
                <h4 className="text-[#102A42] font-semibold text-sm">{data.product.name}</h4>
                <p className="flex items-center text-sm">
                    <span className="text-[#102A42] text-sm block mr-2">Color: </span>
                    <span
                        className={`w-[15px] h-[15px] block rounded-sm  text-sm color-${colorClass(data.color)}`}
                    ></span>
                </p>
            </div>
        </div>
    );
}
