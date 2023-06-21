// import csrfFetch from "./csrf";
// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// const initialState: SessionState = {
//     user: JSON.parse(sessionStorage.getItem("currentUser") || "null"),
//     error: null,
// };
// export const signup = createAsyncThunk<
//     User,
//     SignupUserData,
//     { rejectValue: ServerError }
// >("session/signup", async (user, thunkAPI) => {
//     const { username, password, email } = user;
//         const res = await csrfFetch("/api/users", {
//             method: "POST",
//             body: JSON.stringify({ username, password, email }),
//         });
//             const data = await res.json();
//             storeCurrentUser(data.user);
//             thunkAPI.dispatch(setSessionUser(data.user));       
//     }
// )

// const sessionSlice = createSlice({
//     name: "session",
//     initialState,
//     reducers: {
//         setSessionUser: (state, action: PayloadAction<User>) => {
//             state.user = action.payload;
//         },

//     }),
// })
// const storeCurrentUser = (user: User | null) => {
//     if (user) {
//         let data = JSON.stringify(user);
//         sessionStorage.setItem("currentUser", data);
//     } else {
//         sessionStorage.removeItem("currentUser");
//     }
// };

// export const { setSessionUser, } =
//     sessionSlice.actions;