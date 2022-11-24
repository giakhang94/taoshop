const initFilter = { data: [] };
const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            const newData = [...action.data];
            const filterData = newData.filter((product) => {
                return product.name.includes(action.value);
            });
            return filterData;
        default:
            console.log('default');
    }
};

export { filterReducer, initFilter };
