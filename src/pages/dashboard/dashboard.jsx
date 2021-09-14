import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import TaskList from '../../components/dashboard/taskList/taskList';
import Modal from '../../components/modal/modal';
import { setViewedTitleIndex } from '../../core/actions/main.action';

import './dashboard.css';

const Dashboard = props => {
    const dispatch = useDispatch();
    const [isModalOpen, toggleModalOpen] = useState(false);
    const { tasksArray, viewedTitleIndex } = props;
    let taskData = tasksArray[viewedTitleIndex].description;
    const setIndex = index => {
        dispatch(setViewedTitleIndex(index));
    };
    const toggleModal = () => {
        toggleModalOpen(!isModalOpen);
    };
    console.log(isModalOpen);
    return (
        <div className="dashboard-page">
            <TaskList
                tasksArray={tasksArray}
                setViewedTitleIndex={setIndex}
                openModal={toggleModal}
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
        viewedTitleIndex: state.main.viewedTitleIndex,
    }),
    {
        setViewedTitleIndex,
    }
)(Dashboard);
