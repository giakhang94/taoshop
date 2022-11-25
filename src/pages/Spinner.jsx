import loading from '../assets/images/loading.svg';

function Loading() {
    return (
        <div className="fixed loading flex items-center justify-center top-0 left-0 right-0 bottom-0 z-10 bg-gray-500 w-full ">
            <img src={loading} alt="" className="" />
        </div>
    );
}
export default Loading;
