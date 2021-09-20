import './taskList.css';

const TaskList = props => {
    const { tasksArray, setViewedTitleIndex, openModal } = props;
    return (
        <div className="tasks-array-container">
            {tasksArray.map((task, index) => {
                return (
                    <div
                        key={index}
                        className="tasks-array-task"
                        onDoubleClick={openModal}
                        onClick={() => {
                            setViewedTitleIndex(index);
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
