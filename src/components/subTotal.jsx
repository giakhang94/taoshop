import CurrencyFormat from 'react-currency-format';
import { useCartContext } from '../providers/CartProvider';

export default function SubTotal() {
    let countCart = 0;
    let subTotal = 0;
    const [{ cart }, cartDispatch] = useCartContext();
    cart.map((item) => {
        countCart += item.count;
        subTotal += item.product.price * item.count;
    });
    return (
        <div className="header grid laptop:grid-cols-4 tablet:grid-cols-4 mobile:grid-cols-3 smallmobile:grid-cols-3 justify-items-center text-[#607DB4] tracking-[1.5px] text-lg">
            <div></div>
            <div></div>
            <div className="text-bold tracking-[1.5px]">{countCart}</div>
            <div className="mobile:hidden text-bold tracking-[1.5px] smallmobile:hidden tablet:block laptop:block">
                <CurrencyFormat value={subTotal} displayType="text" prefix="$" thousandSeparator={true} />
            </div>
        </div>
    );
}
