import { CheckoutList, HeroPage, Separate, SubTotal } from '../components';
import { useCartContext } from '../providers/CartProvider';
import { Link } from 'react-router-dom';

function Checkout() {
    const [{ cart }, cartDispatch] = useCartContext();
    return (
        <div className="Checkout min-h-screen">
            <HeroPage title="Cart" />
            <div className="header grid laptop:grid-cols-4 tablet:grid-cols-4 mobile:grid-cols-3 smallmobile:grid-cols-3 justify-items-center text-[#607DB4] tracking-[1.5px] text-lg">
                <div>Item</div>
                <div>Price</div>
                <div>Quantity</div>
                <div className="mobile:hidden smallmobile:hidden tablet:block laptop:block">Subtotal</div>
            </div>
            <Separate addClassname="flex items-center mx-auto w-full" />
            {cart.map((item, index) => {
                if (item.count > 0) {
                    return <CheckoutList data={item} key={index + 'checkout'} />;
                }
            })}
            <Separate addClassname="flex items-center mx-auto w-full" />
            <SubTotal />
            <div
                className="flex laptop:flex-row laptop:justify-around laptop:items-center tablet:flex-row table:justify-around tablet:items-center mobile:flex-col
            smallmobile:flex-col  mx-auto mt-3"
            >
                <Link to="/products">
                    <span className="min-w:[150px] text-center mb-3 block bg-[#AB7B60] text-white font-semibold tracking-[1.5px] py-2 px-3 uppercase rounded-sm mx-3">
                        Countinue Shopping
                    </span>
                </Link>
                <span
                    className="min-w:[150px] text-center block bg-[#45322D] text-white font-semibold tracking-[1.5px] py-2 px-3 uppercase rounded-sm mx-3 cursor-pointer"
                    onClick={() => {
                        cartDispatch({ type: 'CLEAR_CART' });
                    }}
                >
                    CLEAR YOUR CART
                </span>
            </div>
        </div>
    );
}
export default Checkout;
