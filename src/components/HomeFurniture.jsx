import { FaSafari } from 'react-icons/fa';
import { GiDiamondHard } from 'react-icons/gi';
import { MdHistoryEdu } from 'react-icons/md';

function HomeFurniture() {
    return (
        <div className="home-furniture my-20 bg-[#EADED7] mb-40">
            <div className="p-20 space-y-5 bg-[#EADED7] grid laptop:grid-cols-2 tablet-grid-cols-1 mobile:grid-cols-1 smallmobile:grid-cols-1">
                <div className="text-3xl font-bold tracking-[1.5px] text-[#453227] w-full">
                    <h2>Custon Furniture</h2>
                    <h2>Build Only For Your</h2>
                </div>
                <div className="w-full  text-[#453227]">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur
                        reprehenderit non aliquam voluptates dolore aut vero consequuntur.
                    </p>
                </div>
            </div>
            <div className="flex laptop:flex-row laptop:justify-around -mt-[50px] mb-20 tablet:flex-col tablet:items-center mobile:flex-col mobile:items-center smallmobile:flex-col smallmobile:items-center relative -bottom-[50px]">
                <div className="furnited-card m-2 text-[#453227] h-[250px] bg-[#C5A491] w-full py-5 px-5 flex flex-col items-center max-w-[350px] rounded-md">
                    <span className="w-16 h-16 bg-[#EADED7] text-[45px] rounded-[50%] flex justify-center items-center">
                        <FaSafari />
                    </span>
                    <h1 className="m-2 tracking-[1.5px] text-lg font-bold">Mission</h1>
                    <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti
                        reiciendis nesciunt rerum velit autem unde numquam nisi
                    </p>
                </div>
                <div className="furnited-card m-2 text-[#453227] h-[250px] bg-[#C5A491] w-full py-5 px-5 flex flex-col items-center max-w-[350px] rounded-md">
                    <span className="w-16 h-16 bg-[#EADED7] text-[45px] rounded-[50%] flex justify-center items-center">
                        <GiDiamondHard />
                    </span>
                    <h1 className="m-2 tracking-[1.5px] text-lg font-bold">Vision</h1>
                    <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti
                        reiciendis nesciunt rerum velit autem unde numquam nisi
                    </p>
                </div>
                <div className="furnited-card m-2 text-[#453227] h-[250px] bg-[#C5A491] w-full py-5 px-5 flex flex-col items-center max-w-[350px] rounded-md">
                    <span className="w-16 h-16 bg-[#EADED7] text-[45px] rounded-[50%] flex justify-center items-center">
                        <MdHistoryEdu />
                    </span>
                    <h1 className="m-2 tracking-[1.5px] text-lg font-bold">History</h1>
                    <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti
                        reiciendis nesciunt rerum velit autem unde numquam nisi
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomeFurniture;
