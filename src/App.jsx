import { BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../src/components/header/header';
import { AppRouter } from './routes/index';

import './App.css';

import { getTaskData } from './utils/main';

function App(props) {
    const taskData = getTaskData(props);
    return (
        <div className="App">
            <Header viewedShortDesc={taskData.shortDesc} />
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
    }),
    {}
)(App);
