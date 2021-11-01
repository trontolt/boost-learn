import { initialState, VIEW_TITLE, VIEW_TOPIC, SET_ACTIVE_TAB,FILTER_CHANGE } from '../constants/main';

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
        case FILTER_CHANGE: {
            let filterPhraze = action.payload;
            let {tasksArray, tasksBomDomArr, tasksReactArr} = initialState;
            tasksArray = tasksArray.filter((task)=> filterCondition(task, filterPhraze));
            tasksBomDomArr = tasksBomDomArr.filter((task)=> filterCondition(task, filterPhraze));
            tasksReactArr = tasksReactArr.filter((task)=> filterCondition(task, filterPhraze));

            return {...state, tasksArray, tasksBomDomArr, tasksReactArr, filterPhraze: action.payload}
        }
        default: 
            return state;
    }
}


function filterCondition(task, filterPhraze) {
    if (filterPhraze) {
        const lowerPhraze = filterPhraze.toLowerCase();
        return (
            (task.title &&
                task.title.toLowerCase().includes(lowerPhraze)) ||
            (task.shortDesc &&
                task.shortDesc.toLowerCase().includes(lowerPhraze)) ||
            (task.description &&
                task.description.toLowerCase().includes(lowerPhraze))
        );
    } else {
        return true;
    }
}



