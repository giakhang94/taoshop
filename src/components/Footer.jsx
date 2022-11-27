function Footer() {
    return (
        <div className="footer bg-[#222222] h-20 flex items-center justify-center text-white mt-20 ">
            <p className="flex flex-col justify-center items-center">
                <div>
                    &copy; 2022 <span className="text-[#AB7A5F] tracking-[2px]">Tao</span>{' '}
                    <span className="tracking-[2px]">Designer</span> All rights reserved
                </div>
                <div>
                    <span className="block text-sm text-center">
                        Khang Nguyen - ngk.khang94@gmail.com -
                        <a href="https://github.com/giakhang94/taoshop" className="ml-1 text-[#AB7A5F] underline">
                            Github this PJ
                        </a>
                    </span>
                </div>
            </p>
        </div>
    );
}
export default Footer;
