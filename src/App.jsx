import { BrowserRouter} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Header from '../src/components/header/header';
import { AppRouter } from './routes/index';

import './App.css';

import { setActiveTab, filterChange } from './core/actions/main.action';
import { getTaskData } from './utils/main';

function App(props) {
    const taskData = getTaskData(props);
    const { activeTab, setActiveTab, filterAction } = props;
    const dispatch = useDispatch();
    const setTab = tabIndex => dispatch(setActiveTab(tabIndex));

    return (
        <div className="App">
            <Header
                taskData={taskData}
                activeTab={activeTab}
                setActiveTab={setTab}
                filterAction={filterAction}
            />
            <BrowserRouter>
                <AppRouter isLoggedIn={true} />
            </BrowserRouter>
            <p>Footer</p>
        </div>
    );
}

export default connect(
    state => ({
        viewedTitleIndex: state.main.viewedTitleIndex,
        viewedTopicIndex: state.main.viewedTopicIndex,
        tasksArray: state.main.tasksArray,
        tasksBomDomArr: state.main.tasksBomDomArr,
        tasksReactArr: state.main.tasksReactArr,
        activeTab: state.main.activeTab,
    }),
    {
        setActiveTab,
        filterAction: filterChange,
    }
)(App);
