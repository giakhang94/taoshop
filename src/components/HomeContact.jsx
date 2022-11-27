function HomeContact() {
    return (
        <div className="home-contact flex laptop:flex-row tablet:flex-col mobile:flex-col smallmobile:flex-col justify-around py-10 items-center">
            <div className="content  laptop:w-2/4 tablet:full mobile:w-full smallmobile:w-full tablet:px-5 mobile:px-3 smallmobile:px-3">
                <h2 className="text-2xl laptop:text-left mobile:text-center smallmobile:tex-center tablet:text-center font-semibold tracking-[2px] text-[#102A42] laptop:mb-5 tablet:mb-3 mobile:mb-2 smallmobile:mb-2">
                    Join our newsletter and get 20% off
                </h2>
                <p className="leading-8 laptop:pr-[20%] laptop:text-justify text-[#102A42] mobile:text-center smallmobile:tex-center tablet:text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta
                    veniam provident adipisci cumque eveniet tempore?
                </p>
            </div>

            <form action="" className="">
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Enter Email"
                        className=" w-[250px] h-full py-2 px-2  border border-gray-500 shadow-md shadow-gray-500"
                    />
                    <button className="text-md h-[32px] border border-[#453227] bg-[#453227] text-[#EADED7]">
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
}

export default HomeContact;
