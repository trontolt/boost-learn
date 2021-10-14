import { VIEW_TITLE, VIEW_TOPIC } from "../constants/main";

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