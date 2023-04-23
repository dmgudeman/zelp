import csrfFetch from "./csrf";
export const SET_SESSION_USER = "session/SET_SESSION_USER";
export const REMOVE_SESSION_USER = "session/REMOVE_SESSION_USER";

export const setSessionUser = (user) => {
    return {
        type: SET_SESSION_USER,
        user,
    };
};

export const removeSessionUser = () => {
    return {
        type: REMOVE_SESSION_USER,
    };
};

// export const getCurrentUser = (state) => {
//     return state.session?.user ? state.session.user.credential : {};
// };

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const res = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({
            credential,
            password,
        }),
    });

    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setSessionUser(data.user));
    return res;
};

export const signup = (user) => async (dispatch) => {
    const { username, password, email} = user;
    const res = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
            email
        }),
    });

    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setSessionUser(data.user));
    return res;
};

export const logout = () => async (dispatch) => {
    const res = await csrfFetch("/api/session", {
        method: "DELETE"});
    storeCurrentUser(null);
    dispatch(removeSessionUser());
    return res;
};

const storeCurrentUser = (user) => {
    if (user) {
        let data = JSON.stringify(user);
        sessionStorage.setItem("currentUser", data);
    } else {
        sessionStorage.removeItem("currentUser");
    }
};

const storeCSRFToken = (res) => {
    const csrfToken = res.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

export const restoreSession = () => async (dispatch) => {
    const res = await csrfFetch("/api/session");
    storeCSRFToken(res);
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setSessionUser(data.user));
    return res;
};

let initialState = {user: JSON.parse(sessionStorage.getItem('currentUser'))}

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
// await csrfFetch('/api/test?login', { method: 'POST' }).then(res => res.json())
// await csrfFetch('/api/session', {  credential: 'Demo-lition', password: 'password' }).then(res => res.json())
// await csrfFetch('/api/users', {method: 'POST', body:{  username: 'eee', password: 'password', email: 'e@e.com' }}).then(res => res.json())
// await csrfFetch('/api/test?logout', { method: 'POST' }).then(res => res.json())
// await csrfFetch('/api/logout', { method: 'DELETE' }).then(res => res.json())
