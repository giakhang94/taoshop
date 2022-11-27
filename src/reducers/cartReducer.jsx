const initCart = { cart: [] };
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART': //data {product, count}
            let isStack = false;
            let newData = { ...action.data };
            let newCart = [...state.cart];
            let resData = {};
            newCart.map((item, index) => {
                if (item.product.id === action.data.product.id && item.color === action.data.color) {
                    let stackItem = { ...item, count: item.count + action.data.count };
                    //stackItem là item thoả điều kiệu hàm if,
                    //nếu thoả thì trích nó ra 1 cái riêng để tăng count của nó lên
                    //nếu k trích ra sẽ bị strict mode của react làm double lên
                    let newCart2 = [...newCart];
                    //tương tự cho newcart2, trích ra để k bị tác động đến array gốc (strict mode)
                    newCart2[index] = { ...stackItem };
                    isStack = true;
                    resData = { ...state, cart: [...newCart2] };
                    return;
                }
            });
            console.log(newCart);
            if (isStack) {
                return resData;
            } else {
                return { ...state, cart: [...state.cart, newData] };
            }
        case 'SUBCOUNT':
            // console.log(action.id);
            let subCart = [...state.cart];
            state.cart.map((item, index) => {
                if (item.product.id === action.id && item.color === action.color) {
                    let subItem = { ...item, count: item.count - 1 };
                    subCart[index] = { ...subItem };
                }
                //dùng map tìm xem item nào có id trùng vs id bên checkout gởi qua
                //nếu trùng thì trích cái item đó ra, làm 1 cái item mới, dùng srpead {...item}
                //sẵn sprean, upadate lại key count của nó luôn, là dc, k đụng tới array gốc là được
            });
            return { ...state, cart: [...subCart] };
        case 'ADDCOUNT':
            // console.log(action.id);
            let addCart = [...state.cart];
            state.cart.map((item, index) => {
                if (item.product.id === action.id && item.color === action.color) {
                    let addItem = { ...item, count: item.count + 1 };
                    addCart[index] = { ...addItem };
                }
            });
            return { ...state, cart: [...addCart] };
        case 'REMOVE_CART':
            let removeCart = [...state.cart];
            state.cart.map((item, index) => {
                if (item.product.id === action.id && item.color === action.color) {
                    removeCart.splice(index, 1);
                }
                //cái state.cart lấy để chạy map bình thường, k cần clone 1 cái mới
                //chỉ khi nào có tác động thay đổi mới cần clone
                // => Khi đang chạy map, hoặc nằm trên state thì phải clone
            });
            return { ...state, cart: [...removeCart] };
        case 'CLEAR_CART':
            let res = [];
            return { ...state, cart: [...res] };
        default:
            console.log('default');
    }
};

export { initCart, cartReducer };
