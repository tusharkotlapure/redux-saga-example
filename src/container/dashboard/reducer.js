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
                errorData: '',
            };

        case 'FETCH_TABLEDATA_FAILURE':
            return {
                ...state,
                isTableDataFetching: false,
                errorData: action.payload,
                tableData: null,
            }
        default:
            return state;
    }
}
