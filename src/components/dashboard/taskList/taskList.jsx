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
                        onClick={openModal}
                        onMouseOver={() => {
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
