import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import TaskList from '../../components/dashboard/taskList/taskList';
import Modal from '../../components/modal/modal';
import {
    setViewedTitleIndex,
    setViewedTopicIndex,
} from '../../core/actions/main.action';
import { getTaskData } from '../../utils/main';

import './dashboard.css';

const Dashboard = props => {
    const dispatch = useDispatch();
    const [isModalOpen, toggleModalOpen] = useState(false);
    const { tasksArray, tasksBomDomArr } = props;

    const setIndex = (titleIndex, topicIndex) => {
        dispatch(setViewedTitleIndex(titleIndex));
        dispatch(setViewedTopicIndex(topicIndex));
    };

    const taskData = getTaskData(props);

    const toggleModal = () => {
        toggleModalOpen(!isModalOpen);
    };
    return (
        <div className="dashboard-page">
            <TaskList
                tasksArray={tasksArray}
                setViewedIndex={setIndex}
                openModal={toggleModal}
                tasksBomDomArr={tasksBomDomArr}
            />
            {isModalOpen && (
                <Modal taskData={taskData} closeModal={toggleModal} />
            )}
        </div>
    );
};

export default connect(
    state => ({
        tasksArray: state.main.tasksArray,
        tasksBomDomArr: state.main.tasksBomDomArr,
        viewedTitleIndex: state.main.viewedTitleIndex,
        viewedTopicIndex: state.main.viewedTopicIndex,
    }),
    {
        setViewedTitleIndex,
        setViewedTopicIndex,
    }
)(Dashboard);
