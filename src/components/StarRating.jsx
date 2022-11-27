import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

export default function StarRating({ rating, reviews }) {
    function autoStar(rating) {
        let array = [];
        for (var i = 1; i <= Math.floor(rating); i++) {
            array.push(BsStarFill);
        }
        if (rating - Math.floor(rating) <= 0.5) {
            array.push(BsStarHalf);
        } else {
            array.push(BsStarFill);
        }
        if (5 - Math.floor(rating) > 0) {
            const restStars = 5 - Math.floor(rating);
            for (var ii = 1; ii < restStars; ii++) {
                array.push(BsStar);
            }
        }
        return array;
    }
    const arrayStar = autoStar(rating);
    return (
        <div className="flex items-center text-yellow-500 text-md space-x-1">
            {arrayStar.map((Star) => {
                return (
                    <span>
                        <Star />
                    </span>
                );
            })}
            <span className="ml-2 text-[#262A42] tracking-[1.5px]">({reviews} reviews)</span>
        </div>
    );
}
