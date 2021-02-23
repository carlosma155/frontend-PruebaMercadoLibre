const reducer = (state, action) => {
    switch (action.type) {
        case 'FILL_SEARCH':
            return {
                ...state,
                search: action.payload
            }    

        case 'GET_ITEMS_LIST':
            return {
                ...state,
                items: action.payload
            }

        case 'GET_ITEM_DETAILS':
            return {
                ...state,
                itemDetail: action.payload
            }

        case 'UNMOUNT_SEARCH':
            return {
                ...state,
                search: action.payload
            }

        case 'UNMOUNT_ITEMS':
            return {
                ...state,
                items: action.payload
            }

        case 'UNMOUNT_ITEM_DETAILS':
            return {
                ...state,
                itemDetail: action.payload
            }

        default:
            return state;
    }
}

export default reducer;