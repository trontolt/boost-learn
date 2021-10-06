import { titlesWithDescription } from './titles-main';
import { titlesBomDomWithDescription } from './titles-bom-dom';

export const VIEW_TITLE = 'VIEW_TITLE';
export const VIEW_TOPIC = 'VIEW_TOPIC';
export const VIEW_TOPIC_MAIN = 0;
export const VIEW_TOPIC_BOM_DOM = 1;


export const initialState = {
    viewedTitleIndex: 0,
    viewedTopicIndex: 0,
    tasksArray: titlesWithDescription,
    tasksBomDomArr: titlesBomDomWithDescription,
}