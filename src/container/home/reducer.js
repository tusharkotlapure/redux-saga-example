const initialData = {
    'isListingFetching': true,
    'listingData': null,
    'errorData': ''
}

export function listingStore(state = initialData, action) {
    switch (action.type) {
        case 'FETCH_REQUEST_LISTING':
            return {
                ...state,
                isListingFetching: true,
            };

        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                isListingFetching: false,
                listingData: action.payload,
                errorData: '',
            };

        case 'FETCH_PRODUCT_FAILURE':
            return {
                ...state,
                isListingFetching: false,
                errorData: action.payload,
                listingData: null,
            }
        default:
            return state;
    }
}

const cartInitialData = {
    count: 0,
    items: [],
};

export function shoppingCartStore(state = cartInitialData, action) {
    switch (action.type) {
        case 'ADD_CART_PRODUCT':
            return {
                ...state,
                count: state.count + 1,
                items: state.items.length ? state.items.filter(d => d.id !== action.payload.id).concat(action.payload) : [action.payload],
            };

        case 'REMOVE_CART_PRODUCT':
            return {
                ...state,
                count: state.count - 1,
                items: action.payload.count === 0 ? state.items.filter(d => d.id !== action.payload.productId) : state.items.map(d => d.id !== action.payload.productId ? d : { ...d, count: d.count - 1 }),
            };

        default:
            return state;
    }
}
