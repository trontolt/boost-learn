import { initialState, VIEW_TITLE } from '../constants/main';

export const main = (state = initialState, action) =>  {
    switch (action.type) {
        case VIEW_TITLE: {
            return {...state, viewedTitleIndex: action.payload}
        }
        default: 
            return state;
    }
}



