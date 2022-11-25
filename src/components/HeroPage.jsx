import { Link } from 'react-router-dom';
function HeroPage({ title, products }) {
    return (
        <div className="text-3xl py-5 px-5 h-[127px] w-full bg-[#EADED7] flex items-center font-bold space-x-2">
            <span className="text-[#AB7B60] tracking-[2.5px]">
                <Link to="/">Home</Link>
            </span>
            {!!products && products === true ? (
                <span>
                    <span>
                        <Link className="text-[#B27A5F] tracking-[2.5px]" to="/products">
                            /Product /
                        </Link>
                    </span>
                    <span className="text-[#8f654f] tracking-[2.5px] uppercase">{title}</span>
                </span>
            ) : (
                <span className="text-[#453227] tracking-[2.5px]s">
                    <span>/</span>
                    {title}
                </span>
            )}
        </div>
    );
}

export default HeroPage;
