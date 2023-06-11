
import {RootState} from '../store';
import { Dispatch } from '@reduxjs/toolkit';
import csrfFetch from "./csrf";

export const RECEIVE_TAGS = "tags/RECEIVE_TAGS";
export const receiveTags = (tags) => {
    return {
        type: RECEIVE_TAGS,
        tags,
    };
};

export const getTags = (state:RootState) => {
    return state.tags ? Object.values(state.tags) : [];
};

export const fetchTags = () => async (dispatch:Dispatch):Promise<void> => {
    const res = await csrfFetch("/api/tags");

    const data = await res.json();
    dispatch(receiveTags(data));
};

const tagsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TAGS:
            return { ...state, ...action.tags };
        default:
            return state;
    }
};

export default tagsReducer;
