import './taskList.css';
import { connect, useDispatch } from 'react-redux';
import { setViewedTitleIndex } from '../../../core/actions/main.action'

const TaskList = (props) => {
    
    const { tasksArray, setViewedTitleIndex } = props;

    return (
        <div className='tasks-array-container'>
                {tasksArray.map((task,index) => {
                    return <div key={index} className="tasks-array-task" onMouseOver={ ()=> setViewedTitleIndex(index) }>
                            {task.title}
                    </div>
                })}
        </div>
    )
}

export default connect((state)=> ({
    tasksArray: state.main.tasksArray
}),
{
    setViewedTitleIndex
})(TaskList);