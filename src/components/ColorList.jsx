import { useState } from 'react';

function ColorList({ colors }) {
    const [colorState, setColorState] = useState(colors[0]);
    return (
        <div className="flex items-center mb-6">
            <span className="text-[#102A42] font-bold tracking-[1.5px] w-[150px]">Color:</span>
            <div className="flex item-center">
                {colors.map((color) => {
                    return (
                        <button
                            onClick={(e) => {
                                setColorState(color);
                            }}
                            className={`color-${color.replace(
                                '#',
                                '',
                            )} w-[20px] h-[20px] rounded-[50%] opacity-70 mx-1 ${
                                color === colorState ? 'color-active' : ''
                            }`}
                        ></button>
                    );
                })}
            </div>
        </div>
    );
}
export default ColorList;
