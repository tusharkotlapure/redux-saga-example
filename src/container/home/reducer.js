const initialData = {
    'isListingFetching': true,
    'listingData': null,
    'errorData': ''
}

export default function listingStore(state = initialData, action) {
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
            };

        case 'FETCH_PRODUCT_FAILURE':
            return {
                ...state,
                isListingFetching: false,
                errorData: action.payload,
            }
        default:
            return state;
    }
}
