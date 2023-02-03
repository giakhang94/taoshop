import pic1 from '../assets/images/pic1.png'
import pic2 from '../assets/images/pic2.png'
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
                    src={pic1}
                    className="h-[550px] w-full object-cover rounded-md"
                    alt=""
                />
                <img
                    src={pic2}
                    className="w-[45%] h-[25%] min-w-[200px] shadow-md shadow-gray-500 rounded-md absolute bottom-0 -left-[15%]"
                    alt=""
                />
            </div>
        </div>
    );
}
export default HomeHero;
