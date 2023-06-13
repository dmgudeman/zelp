import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    createSelector,
} from "@reduxjs/toolkit";
import csrfFetch from "./csrf";
import type { Tag, TagState } from "../Types/TagTypes";
import type { RootState } from "./store";

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
    const res = await csrfFetch("/api/tags");
    const data = await res.json();
    return data;
});

export const getTags = createSelector(
    (state: RootState) => state.tags,
    (tags: TagState) => Object.values(tags)
);
const initialState: TagState = {};

const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchTags.fulfilled,
            (state, action: PayloadAction<Tag[]>) => {
                return action.payload;
            }
        );
    },
});

export default tagsSlice.reducer;


