import React, { SyntheticEvent } from "react";
import { Tag } from '../TagTypes'

export interface SearchData {
    tag: string;
    bus: string;
    add: string;
}

export interface SBTagProps {
    searchData: SearchData;
    selectTag: string | null;
    hideTagList: boolean;
    handleSearchEvent: (e: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | SyntheticEvent) => void;
    handleTagListClick: (tag: string) => void;
    filterTags: () => Tag[];
    handleHideTagList: () => void;
}
