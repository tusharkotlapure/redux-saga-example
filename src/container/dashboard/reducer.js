const initialData = {
    'isTableDataFetching': true,
    'tableData': null,
    'errorData': ''
}

export default function listingStore(state = initialData, action) {
    switch (action.type) {
        case 'FETCH_REQUEST_TABLEDATA':
            return {
                ...state,
                isTableDataFetching: true,
            };

        case 'FETCH_TABLEDATA_SUCCESS':
            return {
                ...state,
                isTableDataFetching: false,
                tableData: action.payload,
            };

        case 'FETCH_TABLEDATA_FAILURE':
            return {
                ...state,
                isTableDataFetching: false,
                errorData: action.payload,
            }
        default:
            return state;
    }
}
