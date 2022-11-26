import CurrencyFormat from 'react-currency-format';
import { useCartContext } from '../providers/CartProvider';
import CheckoutThumb from './CheckoutThumb';

function CheckoutList({ data }) {
    const [state, cartDispatch] = useCartContext();
    const subTotal = data.count * data.product.price;
    return (
        <div className="header grid laptop:grid-cols-4 tablet:grid-cols-4 mobile:grid-cols-3 smallmobile:grid-cols-3 place-items-center justify-items-center text-[#607DB4] tracking-[1.5px] text-md">
            <div className="relative">
                <CheckoutThumb data={data} />
            </div>
            <div className="text-[#AB7B60] mobile:text-sm smallmobile:text-sm">
                <CurrencyFormat value={data.product.price} displayType="text" prefix="$" thousandSeparator={true} />
            </div>
            <div>
                <span
                    className=" cursor-pointer text-lg mr-2"
                    onClick={() => {
                        cartDispatch({ type: 'SUBCOUNT', id: data.product.id, color: data.color });
                    }}
                >
                    -
                </span>
                <span>{data.count}</span>
                <span
                    className=" cursor-pointer text-lg ml-2"
                    onClick={() => {
                        cartDispatch({ type: 'ADDCOUNT', id: data.product.id, color: data.color });
                    }}
                >
                    +
                </span>
            </div>
            <div className="mobile:hidden smallmobile:hidden tablet:block laptop:block">
                <CurrencyFormat value={subTotal} displayType="text" prefix="$" thousandSeparator={true} />
            </div>
        </div>
    );
}

export default CheckoutList;
