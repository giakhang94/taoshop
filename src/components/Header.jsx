import logo from '../assets/images/logo2.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
function Header() {
    return (
        <div className="header relative flex justify-between items-center laptop:px-20 tablet:px-10 mobile:px-5 smallmobile:px-5 py-2 h-[80px] bg-color-primary shadow-md w-full">
            <div className="header-logo w-auto h-[52px]">
                <Link to="/">
                    <img src={logo} alt="Tao designer" className="h-full" />
                </Link>
            </div>
            <div className="mobile-menu laptop:hidden py-10">
                <FiMenu className="text-2xl text-[#AB7A5F] font-semibold cursor-pointer" />
                <ul className=" hidden absolute shadow-sm  shadow-gray-300 top-[100%]  min-w-[120px] w-full pt-1 pb-5 leading-8 px-5 bg-white right-0 laptop:space-x-12 laptop:text-md tablet:space-x-5 tablet:text-sm letter tracking-wide z-[1000] ">
                    <Link to="/">
                        <li className="block hover:font-bold tracking-[2.5px] cursor-pointer">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="block hover:font-bold tracking-[2.5px] cursor-pointer">About</li>
                    </Link>
                    <Link to="/products">
                        <li className="block hover:font-bold tracking-[2.5px] cursor-pointer">Products</li>
                    </Link>

                    <Link to="/checkout">
                        <span className="relative block mt-5">
                            <FaShoppingCart />
                            <span className="absolute -top-[100%] left-5">12</span>
                        </span>
                    </Link>
                    <Link to="/sign-in">
                        <span className="text-md text-[#AB7A5F] font-bold block">Login</span>
                    </Link>
                </ul>
            </div>
            <ul className=" laptop:flex tablet:hidden mobile:hidden smallmobile:hidden laptop:space-x-12 laptop:text-md tablet:space-x-5 tablet:text-sm letter tracking-wide ">
                <Link to="/">
                    <li className="tracking-[2.5px] cursor-pointer">Home</li>
                </Link>
                <Link to="/about">
                    <li className="tracking-[2.5px] cursor-pointer">About</li>
                </Link>
                <Link to="/products">
                    <li className="tracking-[2.5px] cursor-pointer">Products</li>
                </Link>
            </ul>
            <div className="user mobile:hidden tablet:hidden smallmobile:hidden laptop:flex items-center space-x-8 mobile:space-x-3 smallmobile:space-x-3 mobile:text-sm smallmobile:text-sm">
                <div className="cart flex items-center space-x-1">
                    <Link to="/checkout">
                        <span className="relative">
                            <FaShoppingCart />
                            <span className="absolute -top-[100%] -right-3">12</span>
                        </span>
                    </Link>
                </div>
                <div className="user">
                    <Link to="/sign-in">
                        <span className="text-md text-[#AB7A5F] font-bold">Login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Header;
