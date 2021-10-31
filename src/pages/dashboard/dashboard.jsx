import { useState, useEffect, useCallback } from 'react';
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
    const {
        tasksArray,
        tasksBomDomArr,
        tasksReactArr,
        activeTab,
        filterPhraze,
    } = props;
    const setIndex = useCallback(
        (titleIndex, topicIndex) => {
            dispatch(setViewedTitleIndex(titleIndex));
            dispatch(setViewedTopicIndex(topicIndex));
        },
        [dispatch]
    );

    useEffect(() => {
        //to automatically choose default title, when tab changed
        if (activeTab === 1) {
            setIndex(0, VIEW_TOPIC_REACT);
        } else if (activeTab === 0) {
            setIndex(0, VIEW_TOPIC_MAIN);
        }
    }, [activeTab, setIndex]);

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
                filterPhraze={filterPhraze}
            />
            {isModalOpen && (
                <Modal taskData={taskData} closeModal={toggleModal} />
            )}
        </div>
    );
};

export default connect(
    ({ main }) => ({
        //eject main from state.main like from event.target here onChange={({ target: { value } }) => onChangeFirstName(value)}
        tasksArray: main.tasksArray,
        tasksBomDomArr: main.tasksBomDomArr,
        tasksReactArr: main.tasksReactArr,
        viewedTitleIndex: main.viewedTitleIndex,
        viewedTopicIndex: main.viewedTopicIndex,
        activeTab: main.activeTab,
        filterPhraze: main.filterPhraze,
    }),
    {
        setViewedTitleIndex,
        setViewedTopicIndex,
    }
)(Dashboard);
