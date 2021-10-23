import { VIEW_TITLE, VIEW_TOPIC, SET_ACTIVE_TAB } from "../constants/main";

export const setViewedTitleIndex = (payload) => {
    return { 
        type: VIEW_TITLE,
        payload, 
    }
}
 
export const setViewedTopicIndex = (payload) => {
    return {
        type: VIEW_TOPIC,
        payload,
    }
}

export const setActiveTab = (payload) => {
    return {
        type: SET_ACTIVE_TAB,
        payload,
    }
}