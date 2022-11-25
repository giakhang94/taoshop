import CurrencyFormat from 'react-currency-format';
import { MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ProductCard({ title, src, price, id }) {
    return (
        <div className="h-[170px] px-2 flex flex-col w-fit mx-auto">
            <div className="rounded-lg h-full w-auto min-w-[260px] relative product-card-thumb">
                <img src={src} alt="" className="w-full h-full mb-2 rounded-md object-cover" />
                <Link to={`/products/${id}`}>
                    <span className="product-card-add rounded-md justify-center items-center hidden absolute w-full h-full top-0 left-0 text-3xl text-green-500 bg-[0,0,0,0.5]">
                        <MdAddCircle className="cursor-pointer" />
                    </span>
                </Link>
            </div>
            <div className="flex justify-between px-1 py-1">
                <span className="transform: uppercase tracking-[1px] text-sm cursor-pointer">{title}</span>
                <span className="text-sm">
                    <CurrencyFormat
                        value={price}
                        displayType="text"
                        prefix="$"
                        thousandSeparator={true}
                        className="text-[#AB7A5F] font-bold"
                    />
                </span>
            </div>
        </div>
    );
}
export default ProductCard;
