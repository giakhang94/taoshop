function HomeHero() {
    return (
        <div className="flex items-center justify-evenly  laptop:px-20 tablet:px-10 mobile:px-5 smallmobile:px-5 py-5">
            <div className="home-content flex laptop:flex-col laptop:w-[50%] tablet:flex-col tablet:w-full mobile:w-full mobile:flex-col smallmobile:flex-col smallmobile:w-full pr-20 mobile:pr-5 smallmobile:pr-5">
                <div className="text-[#102A42] laptop:text-5xl tablet:text-3xl mobile:text-2xl smallmobile:text-2xl font-bold tracking-[1.5px] mb-6">
                    <h2>Desgin Your</h2>
                    <h2>Comfort Zone</h2>
                </div>
                <p className="text-justify text-slate-600 laptop:text-lg tablet:text-md smallmobile:text-sm tracking-[2px] mb-6 mobile:text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque
                    possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora
                    excepturi quis alias?
                </p>
                <button className="text-white bg-[#AB7A5F] rounded-md py-2 tracking-[2px] w-40">SHOP NOW</button>
            </div>
            <div className="homehero-imgs laptop:w-[50%] laptop:block tablet:hidden mobile:hidden smallmobile:hidden h-full ml-[20%] relative shadow-lg shadow-gray-500 rounded-lg ">
                <img
                    src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.15752-9/315530721_707265560825513_6995871161548759775_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=rO4llp3-N8IAX-bnp29&_nc_ht=scontent.fsgn5-13.fna&oh=03_AdQlPCcUUa1rTw6HULtjLCPAoKb77jw_yW-iSkQeipkxkw&oe=63CFA883"
                    className="h-[550px] w-full object-cover rounded-md"
                    alt=""
                />
                <img
                    src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/315522414_5572353732863933_859207125840597748_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=stKVMdtpf_gAX8dodfS&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdRksbvYFp9ZZOTvSdSeDumBBvvMXKF6LSo286ifet2dNQ&oe=63CFC21A"
                    className="w-[45%] h-[25%] min-w-[200px] shadow-md shadow-gray-500 rounded-md absolute bottom-0 -left-[15%]"
                    alt=""
                />
            </div>
        </div>
    );
}
export default HomeHero;
