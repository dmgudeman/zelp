import React, { SyntheticEvent } from "react";
import { Business } from "../BusinessTypes";
import { Tag } from "../TagTypes";


export interface INavBarProps {
    showFlag: string | boolean;
}
export interface SearchData {
    tag: string;
    bus: string;
    add: string;
}

export interface SBTagProps {
    searchData: SearchData;
    selectTag: string | null;
    hideTagList: boolean;
    handleSearchEvent: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLInputElement>
            | SyntheticEvent
    ) => void;
    handleTagListClick: (tag: string) => void;
    handleHideTagList: () => void;
    filterTags: () => Tag[];
}

export interface SBBusProps {
    searchData: SearchData;
    selectBus: string | null;
    hideBusList: boolean;
    handleSearchEvent: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLInputElement>
            | SyntheticEvent
    ) => void;
    handleBusListClick: (bus: string) => void;
    handleHideBusList: () => void;
    filterBusinesses: () => Business[];
}

export interface SBAddProps {
    searchData: SearchData;
    handleSearchEvent: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLInputElement>
            | SyntheticEvent
    ) => void;
}

export interface SBButtonProps {
    handleSearchSubmit: () => void;
}
