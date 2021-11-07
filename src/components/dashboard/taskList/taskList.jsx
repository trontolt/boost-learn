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
    } = props;

    function tabRender() {
        const activeTab = props.activeTab;

        if (activeTab === 0) {
            return (
                <React.Fragment>
                    {tasksArray.map((task, index) => {
                        return (
                            <div
                                key={index}
                                tabIndex={0}
                                className="tasks-array-task"
                                onDoubleClick={openModal}
                                onFocus={() => {
                                    setViewedIndex(index, VIEW_TOPIC_MAIN);
                                }}
                            >
                                {task.title}
                            </div>
                        );
                    })}
                    <hr></hr>
                    {tasksBomDomArr.map((task, index) => {
                        return (
                            <div
                                key={index}
                                tabIndex={0}
                                className="tasks-array-task"
                                onDoubleClick={openModal}
                                onFocus={() => {
                                    setViewedIndex(index, VIEW_TOPIC_BOM_DOM);
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
                    {tasksReactArr.map((task, index) => {
                        return (
                            <div
                                key={index}
                                tabIndex={0}
                                className="tasks-array-task"
                                onDoubleClick={openModal}
                                onFocus={() => {
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
