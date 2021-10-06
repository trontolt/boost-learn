import './taskList.css';
import {
    VIEW_TOPIC_MAIN,
    VIEW_TOPIC_BOM_DOM,
} from '../../../core/constants/main';

const TaskList = props => {
    const { tasksArray, setViewedIndex, openModal, tasksBomDomArr } = props;
    return (
        <div className="tasks-array-container">
            {tasksArray.map((task, index) => {
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
            {tasksBomDomArr.map((task, index) => {
                return (
                    <div
                        key={index}
                        className="tasks-array-task"
                        onDoubleClick={openModal}
                        onClick={() => {
                            setViewedIndex(index, VIEW_TOPIC_BOM_DOM);
                        }}
                    >
                        {task.title}
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;
