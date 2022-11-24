function HomeContact() {
    return (
        <div className="home-contact flex justify-around py-10 items-center">
            <div className="content w-2/4">
                <h2 className="text-2xl font-semibold tracking-[2px] text-[#102A42] mb-5">
                    Join our newsletter and get 20% off
                </h2>
                <p className="leading-8 pr-[20%] text-justify text-[#102A42]">
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
