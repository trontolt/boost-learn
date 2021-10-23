import {VIEW_TOPIC_MAIN, VIEW_TOPIC_BOM_DOM, VIEW_TOPIC_REACT} from '../core/constants/main';

export const getTaskData = (props) => {
    const  { viewedTopicIndex,viewedTitleIndex,tasksArray,tasksBomDomArr, tasksReactArr } = props;
    if (viewedTopicIndex === VIEW_TOPIC_MAIN)
        return tasksArray[viewedTitleIndex];
    else if (viewedTopicIndex === VIEW_TOPIC_BOM_DOM)
        return tasksBomDomArr[viewedTitleIndex];
    else if (viewedTopicIndex === VIEW_TOPIC_REACT)
        return tasksReactArr[viewedTitleIndex];
};