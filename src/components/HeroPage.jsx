import {Link} from 'react-router-dom'
function HeroPage({title}) {
    return (
        <div className='text-3xl py-5 px-5 h-[127px] w-full bg-[#EADED7] flex items-center font-bold space-x-2'>
            <span className='text-[#AB7B60] tracking-[2.5px]'><Link to = '/'>Home</Link></span>
            <span className='text-[#453227] tracking-[2.5px]s'><span>/</span>{title}</span>
        </div>
    )
}

export default HeroPage