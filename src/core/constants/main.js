import { titlesWithDescription } from './titles-main';
import { titlesBomDomWithDescription } from './titles-bom-dom';
import { titlesReactWithDescrition } from './titles-react';

export const VIEW_TITLE = 'VIEW_TITLE';
export const VIEW_TOPIC = 'VIEW_TOPIC';
export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const VIEW_TOPIC_MAIN = 0;
export const VIEW_TOPIC_BOM_DOM = 1;
export const VIEW_TOPIC_REACT = 2;


export const initialState = {
    activeTab: 1,
    viewedTitleIndex: 0,
    viewedTopicIndex: 0,
    tasksArray: titlesWithDescription,
    tasksBomDomArr: titlesBomDomWithDescription,
    tasksReactArr: titlesReactWithDescrition,
}