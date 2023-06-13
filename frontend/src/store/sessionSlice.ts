import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import csrfFetch from "./csrf";
import { Session, User, SignupUserData } from "../Types/SessionTypes";
import { RootState, AppDispatch } from "./store";

export const getCurrentUser = (state: RootState): Session | null => {
    return state.session.user ? { user: { ...state.session.user } } : null;
};

//   export const getUser = (state:RootState) => {
//     return state.session?.user ? state.session.user : null;
// };

export const login = createAsyncThunk<
    User,
    { credential: string; password: string }
>("session/login", async (user, { dispatch }) => {
    const { credential, password } = user;
    const res = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({ credential, password }),
    });

    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setSessionUser(data.user));
    return data.user;
});

// Helper function puts user in session storage
const storeCurrentUser = (user: User | null) => {
    if (user) {
        let data = JSON.stringify(user);
        sessionStorage.setItem("currentUser", data);
    } else {
        sessionStorage.removeItem("currentUser");
    }
};

export const signup = createAsyncThunk<User, SignupUserData>(
    "session/signup",
    async (user, { dispatch }) => {
        const { username, password, email } = user;
        const res = await csrfFetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ username, password, email }),
        });

        const data = await res.json();
        storeCurrentUser(data.user);
        dispatch(setSessionUser(data.user));
        return data.user;
    }
);

export const logout = createAsyncThunk<void, void>(
    "session/logout",
    async (_, { dispatch }) => {
        const res = await csrfFetch("/api/session", {
            method: "DELETE",
        });
        storeCurrentUser(null);
        dispatch(removeSessionUser());
    }
);

export const restoreSession = createAsyncThunk<User | null>(
    "session/restoreSession",
    async (_, { dispatch }) => {
        const res = await csrfFetch("/api/session");
        storeCSRFToken(res);
        const data = await res.json();
        storeCurrentUser(data.user);
        dispatch(setSessionUser(data.user));
        return data.user;
    }
);

const storeCSRFToken = (res: Response) => {
    const csrfToken = res.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
};
const initialState: Session = {
    user: JSON.parse(sessionStorage.getItem("currentUser") || "null"),
};

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setSessionUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        removeSessionUser: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                //consider closing modal here?
            })
            .addCase(signup.fulfilled, (state) => {
                //consider closing modal here?
            })
            .addCase(restoreSession.fulfilled, (state, action) => {
                // Handle restore session fulfillment
            })
            .addCase(logout.fulfilled, (state) => {
                // Reset the session state after successful logout
                state.user = null;
            });
    },
});

export const { setSessionUser, removeSessionUser } = sessionSlice.actions;

export default sessionSlice.reducer;
