import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import TaskList from '../../components/dashboard/taskList/taskList';
import Modal from '../../components/modal/modal';
import {
    setViewedTitleIndex,
    setViewedTopicIndex,
} from '../../core/actions/main.action';
import { getTaskData } from '../../utils/main';

import './dashboard.css';
import { VIEW_TOPIC_REACT, VIEW_TOPIC_MAIN } from '../../core/constants/main';

const Dashboard = props => {
    const dispatch = useDispatch();
    const [isModalOpen, toggleModalOpen] = useState(false);
    const { tasksArray, tasksBomDomArr, tasksReactArr, activeTab } = props;
    const setIndex = (titleIndex, topicIndex) => {
        dispatch(setViewedTitleIndex(titleIndex));
        dispatch(setViewedTopicIndex(topicIndex));
    };

    useEffect(() => {
        //to automatically choose default title, when tab changed
        if (activeTab === 1) {
            setIndex(0, VIEW_TOPIC_REACT);
        } else if (activeTab === 0) {
            setIndex(0, VIEW_TOPIC_MAIN);
        }
    }, [activeTab]);

    const taskData = getTaskData(props);

    const toggleModal = () => {
        toggleModalOpen(!isModalOpen);
    };
    return (
        <div className="dashboard-page">
            <TaskList
                activeTab={activeTab}
                tasksArray={tasksArray}
                setViewedIndex={setIndex}
                openModal={toggleModal}
                tasksBomDomArr={tasksBomDomArr}
                tasksReactArr={tasksReactArr}
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
        tasksReactArr: state.main.tasksReactArr,
        viewedTitleIndex: state.main.viewedTitleIndex,
        viewedTopicIndex: state.main.viewedTopicIndex,
        activeTab: state.main.activeTab,
    }),
    {
        setViewedTitleIndex,
        setViewedTopicIndex,
    }
)(Dashboard);
