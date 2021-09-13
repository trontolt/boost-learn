import './taskList.css';

const TaskList = (props) => {
    const {tasksArray} = props;
    return (
        <div className='tasks-array-container'>
                {tasksArray.map((task,index) => {
                    return <div key={index} className="tasks-array-task">
                        {/* <div> */}
                            {task.title}
                        {/* </div> */}
                    </div>
                })}
        </div>
    )
}

export default TaskList;