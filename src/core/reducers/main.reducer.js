import { initialState, VIEW_TITLE, VIEW_TOPIC, SET_ACTIVE_TAB } from '../constants/main';

export const main = (state = initialState, action) =>  {
    switch (action.type) {
        case VIEW_TITLE: {
            return {...state, viewedTitleIndex: action.payload}
        }
        case VIEW_TOPIC: {
            return {...state, viewedTopicIndex: action.payload}
        }
        case  SET_ACTIVE_TAB: {
            return { ...state, activeTab: action.payload }
        }
        default: 
            return state;
    }
}



