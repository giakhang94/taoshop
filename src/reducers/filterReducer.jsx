const initFilter = { data: [] };
const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            const newData = [...action.data];
            const SearchData = newData.filter((product) => {
                return product.name.includes(action.value);
            });
            return SearchData;
        case 'FILTER':
            const filter = [...action.data];
            const all = action.category;

            const filterCategory = filter.filter((product) => {
                if (all === 'all') {
                    return filter;
                } else {
                    return product.category === action.category;
                }
            });
            const filterCompany = filterCategory.filter((product) => {
                if (action.company !== 'all') {
                    return product.company === action.company;
                } else {
                    return filterCategory;
                }
            });
            const filterColor = filterCompany.filter((product) => {
                if (action.color !== 'all') {
                    return product.colors.includes(action.color);
                } else {
                    return filterCompany;
                }
            });
            const filterPrice = filterColor.filter((product) => {
                if (action.price !== 'all') {
                    return product.price <= action.price;
                } else {
                    return filterColor;
                }
            });
            return filterPrice;
        default:
            console.log('default');
    }
};

export { filterReducer, initFilter };
