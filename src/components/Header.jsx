import logo from '../assets/images/logo2.png';
import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
function Header() {
    return (
        <div className="header flex justify-between items-center px-20 py-2 h-[80px] bg-color-primary shadow-md">
            <div className="header-logo w-auto h-[52px]">
                <Link to ="/"><img src ={logo} alt ="Tao designer" className='h-full'/></Link>
            </div>
            <ul className='flex space-x-12 letter tracking-wide'>
                <Link to ="/"><li className='tracking-[2.5px] cursor-pointer'>Home</li></Link>
                <Link to ="/about"><li className='tracking-[2.5px] cursor-pointer'>About</li></Link>
                <Link to ="/products"><li className='tracking-[2.5px] cursor-pointer'>Products</li></Link>
            </ul>
            <div className='user flex items-center space-x-8'>
                <div className='cart flex items-center space-x-1'>
                   <Link to ='/checkout'>
                        <span className='relative'>
                            <FaShoppingCart/>
                            <span className='absolute -top-[100%] -right-3'>12</span>
                        </span>
                   </Link>
                </div>
                <div className="user">
                    <Link to ='/sign-in'><span className='text-md text-[#AB7A5F] font-bold'>Login</span></Link>
                </div>
            </div>
        </div>
    )
}
export default Header