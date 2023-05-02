import csrfFetch from "./csrf";

export const RECEIVE_TAGS = "tags/RECEIVE_TAGS";
export const receiveTags = (tags) => {
    return {
        type: RECEIVE_TAGS,
        tags,
    };
};

export const getTags = (state) => {
    return state.tags ? Object.values(state.tags) : [];
};

export const fetchTags = () => async (dispatch) => {
    const res = await csrfFetch("/api/tags");
    console.log("in fetchTagsssssssssssss", res);

    const data = await res.json();
    dispatch(receiveTags(data));
};

const tagsReducer = (state = {}, action) => {
    console.log("in tagsReducer action.type", action.type);
    switch (action.type) {
        case RECEIVE_TAGS:
            return { ...state, ...action.tags };
        default:
            return state;
    }
};

export default tagsReducer;
