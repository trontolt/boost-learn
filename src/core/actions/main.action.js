import { VIEW_TITLE } from "../constants/main";

export const setViewedTitleIndex = (payload) => {
    return { 
        type: VIEW_TITLE,
        payload: payload, 
    }
}