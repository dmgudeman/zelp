import csrfFetch from "./csrf";

export const SET_SESSION_USER = "session/SET_SESSION_USER";

export const signup = (user) => async (dispatch) => {
    const { username, password, email } = user;
    const res = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
            email,
        }),
    });

    const data = await res.json();
        storeCurrentUser(data.user);
        dispatch(setSessionUser(data.user));
        return res;
};

export const setSessionUser = (user) => {
    return {
        type: SET_SESSION_USER,
        user,
    };
};


const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSION_USER:
            return { ...state, user: action.user };
        case REMOVE_SESSION_USER:
            return { ...state, user: null };
        default:
            return state;
    }
};

export default sessionReducer;
