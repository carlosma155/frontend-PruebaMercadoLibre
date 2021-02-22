import axios from 'axios';

export const fillSearch = (payload) => ({
    type: 'FILL_SEARCH',
    payload
});

export const getItemsList = (payload) => ({
    type: 'GET_ITEMS_LIST',
    payload
});

export const unmountSearch = (payload) => ({
    type: 'UNMOUNT_SEARCH',
    payload
})

export const unmountItems = (payload) => ({
    type: 'UNMOUNT_ITEMS',
    payload
})

export const setError = (payload) => ({
    type: 'SET_ERROR',
    payload
});

export const getItems = (payload) => {
    return (dispatch) => {
        axios({
            url: `http://localhost:3000/api/items?q=${payload}`,
            method: 'get'
        })
        .then(({ data }) => dispatch(getItemsList(data)))
        .catch(error => dispatch(setError(error)))
    }
}