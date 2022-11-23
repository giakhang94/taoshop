import CurrencyFormat from 'react-currency-format';


function ProductCard({title, src, price}) {
    return(
        <div className="max-h-[200px] max-w-[300px] px-2">
            <div>
                <img src={src} alt="" className='w-full h-full mb-2 rounded-md'/>
                <div className='flex justify-between px-1'>
                    <span className='transform: uppercase tracking-[1px]'>{title}</span>
                    <span><CurrencyFormat value={price} displayType="text" prefix='$' thousandSeparator={true}/></span>
                </div>
                
            </div>


        </div>
    )
}
export default ProductCard