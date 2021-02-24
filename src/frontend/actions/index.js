import axios from 'axios';

export const fillSearch = (payload) => ({
    type: 'FILL_SEARCH',
    payload
});

export const getItemsList = (payload) => ({
    type: 'GET_ITEMS_LIST',
    payload
});

export const getItemDetails = (payload) => ({
    type: 'GET_ITEM_DETAILS',
    payload
})

export const unmountSearch = (payload) => ({
    type: 'UNMOUNT_SEARCH',
    payload
})

export const unmountItems = (payload) => ({
    type: 'UNMOUNT_ITEMS',
    payload
})

export const unmountItemDetails = (payload) => ({
    type: 'UNMOUNT_ITEM_DETAILS',
    payload
})

export const setError = (payload) => ({
    type: 'SET_ERROR',
    payload
});

export const getItems = (query) => {
    return (dispatch) => {
        axios.get(`/serverItems?query=${query}`)
        .then(({ data }) => dispatch(getItemsList(data)))
        .catch(error => dispatch(setError(error)))
    }
}

export const getItem = (itemId) => {
    return (dispatch) => {
        axios.get(`/serverItems/${itemId}`)
        .then(({ status, data }) => {
            if(status === 200) {
                dispatch(getItemDetails(data))
            }
        })
        .catch(error => dispatch(setError(error)))
    }
}