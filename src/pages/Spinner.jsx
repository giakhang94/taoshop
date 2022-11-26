import loading from '../assets/images/loading.svg';

function Loading() {
    return (
        <div className=" loading flex items-center justify-center z-10 w-full h-screen ">
            <img src={loading} alt="" className="" />
        </div>
    );
}
export default Loading;
