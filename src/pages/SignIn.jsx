function SignIn() {
    return (
        <div className="Sign flex justify-center items-center relative">
            <div
                className="h-screen w-full"
                style={{
                    background: `url(https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_960_720.jpg)`,
                }}
            >
                <img
                    className="h-full object-cover w-full"
                    src="https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_960_720.jpg"
                    alt=""
                />
            </div>
            <div className=" modal w-full text-center text-3xl modal absolute top-2/4 left-2/4 -translate-x-[50%] -translate-y-[50%] leading-[60px] text-white font-semibold tracking-[2px]">
                <p>Web này dùng để test kiến thức useReducer và useContext</p>
                <p>Tạo filter lồng nhau, cập nhật giỏ hàng từ API bên ngoài, không kết hợp với B.E</p>
                <p>Login/Auth có thể dùng Firebase, đã được thể hiện ở các Project khác của tôi</p>
                <p>Thành thật xin lỗi vì sự bất tiện này!</p>
                <p className="text-lg italic">100% code tay</p>
            </div>
        </div>
    );
}

export default SignIn;
