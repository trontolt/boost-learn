import './taskList.css';
import {
    VIEW_TOPIC_MAIN,
    VIEW_TOPIC_BOM_DOM,
    VIEW_TOPIC_REACT,
} from '../../../core/constants/main';
import React from 'react';

const TaskList = props => {
    const {
        tasksArray,
        setViewedIndex,
        openModal,
        tasksBomDomArr,
        tasksReactArr,
        filterPhraze,
    } = props;
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
    function tabRender() {
        const activeTab = props.activeTab;

        if (activeTab === 0) {
            return (
                <React.Fragment>
                    {tasksArray
                        .filter(task => filterCondition(task, filterPhraze))
                        .map((task, index) => {
                            return (
                                <div
                                    key={index}
                                    className="tasks-array-task"
                                    onDoubleClick={openModal}
                                    onClick={() => {
                                        setViewedIndex(index, VIEW_TOPIC_MAIN);
                                    }}
                                >
                                    {task.title}
                                </div>
                            );
                        })}
                    <hr></hr>
                    {tasksBomDomArr
                        .filter(task => filterCondition(task, filterPhraze))
                        .map((task, index) => {
                            return (
                                <div
                                    key={index}
                                    className="tasks-array-task"
                                    onDoubleClick={openModal}
                                    onClick={() => {
                                        setViewedIndex(
                                            index,
                                            VIEW_TOPIC_BOM_DOM
                                        );
                                    }}
                                >
                                    {task.title}
                                </div>
                            );
                        })}
                </React.Fragment>
            );
        } else if (activeTab === 1) {
            return (
                <React.Fragment>
                    {tasksReactArr
                        .filter(task => filterCondition(task, filterPhraze))
                        .map((task, index) => {
                            return (
                                <div
                                    key={index}
                                    className="tasks-array-task"
                                    onDoubleClick={openModal}
                                    onClick={() => {
                                        setViewedIndex(index, VIEW_TOPIC_REACT);
                                    }}
                                >
                                    {task.title}
                                </div>
                            );
                        })}
                </React.Fragment>
            );
        }
    }
    return <div className="tasks-array-container">{tabRender()}</div>;
};;

export default TaskList;
