import { useState } from 'react';

function ProductImage({ image }) {
    const [main, setMain] = useState(0);
    return (
        <div className="p-5 w-full">
            <div className="main-img w-auto h-[350px] object-cover shadow-md shadow-gray-500 rounded-md">
                <img src={image[main].url} className="w-full object-cover h-full rounded-md" alt="" />
            </div>
            <div className="list-img flex justify-around w-full">
                {image.map((img, index) => {
                    return (
                        <div className="m-1" key={img.id}>
                            <img
                                src={img.url}
                                alt=""
                                className="w-full h-[80px] object-cover cursor-pointer rounded-md mt-2 shadow-md shadow-gray-500"
                                onClick={(e) => {
                                    setMain(index);
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default ProductImage;
