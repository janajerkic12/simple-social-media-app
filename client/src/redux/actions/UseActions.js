export const SET_USERNAME = 'SET_USERNAME';
export const SET_LOGGED_IN = 'SET_LOGGED_IN'

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        payload: username
    };
}

export const setLoggedIn = (data) => {
    return {
        type: SET_LOGGED_IN,
        payload: data
    };
}