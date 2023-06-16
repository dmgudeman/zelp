import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import csrfFetch from "./csrf";
import { SessionState, User, SignupUserData } from "../Types/SessionTypes";
import { hideSignupModal } from "./uiSlice";
import type { RootState, AppDispatch } from "./store";
import type { ServerError} from "../Types/SessionTypes"

export const getCurrentUser = (state: RootState): SessionState | null => {
    return state.session.user ? { user: { ...state.session.user }, error: state.session.error } : null;
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

// export const signup = createAsyncThunk<User, SignupUserData,  { rejectValue: ServerError }>(
//     "session/signup",
//     async (user, { dispatch, rejectWithValue}) => {
//         const { username, password, email } = user;
//         const res = await csrfFetch("/api/users", {
//             method: "POST",
//             body: JSON.stringify({ username, password, email }),
//         });

//         if (res.ok) {
//             const data = await res.json();
//             storeCurrentUser(data.user);
//             dispatch(setSessionUser(data.user));
//             dispatch(hideSignupModal);
//             return data.user;
//         } else {
//             let errorData = await res.json(); // Parse the error response
//             return rejectWithValue(errorData);
//         }
//     }
// );

export const signup = createAsyncThunk<User, SignupUserData, { rejectValue: ServerError }>(
    "session/signup",
    async (user, thunkAPI) => {
        const { username, password, email } = user;
        try {
            const res = await csrfFetch("/api/users", {
                method: "POST",
                body: JSON.stringify({ username, password, email }),
            });

            if (res.ok) {
                
                const data = await res.json();
                console.log('DAAAATTTTAAAA', data)
                storeCurrentUser(data.user);
                thunkAPI.dispatch(setSessionUser(data.user));
                thunkAPI.dispatch(hideSignupModal());
                return data.user;
            } else {
                const errorData = await res.json();
                console.error('Error data:', errorData); // Log error data
                return thunkAPI.rejectWithValue(errorData);
            }
        } catch (err) {
            console.error('Error occurred:', err); // Log error
            return thunkAPI.rejectWithValue({ errors: ['An unknown error occurred. Please try again.'] });
        }
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
const initialState: SessionState = {
    user: JSON.parse(sessionStorage.getItem("currentUser") || "null"),
    error: null
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
                // consider closing modal here
            })
            .addCase(signup.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.error = null; // reset the error
            })
            .addCase(restoreSession.fulfilled, (state, action) => {})
            .addCase(logout.fulfilled, (state) => {
                // Reset the session state after successful logout
                state.user = null;
            });
        builder
            .addCase(login.rejected, (state, action) => {
                console.error("login rejected");
            })
            .addCase(signup.rejected, (state, action) => {
                console.log('ACTION', action)
                if (action.payload) {
                    state.error = action.payload; // set the error
                } else {
                    state.error = { errors: ['An unknown error occurred. Please try again.'] };
                }
            });
    },
});

export const { setSessionUser, removeSessionUser } = sessionSlice.actions;

export default sessionSlice.reducer;
