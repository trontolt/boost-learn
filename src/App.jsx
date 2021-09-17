import { BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../src/components/header/header';
import { AppRouter } from './routes/index';

import './App.css';

function App(props) {
    const { viewedTitleIndex, tasksArray } = props;
    const viewedTask = tasksArray && tasksArray[viewedTitleIndex];
    return (
        <div className="App">
            <Header viewedShortDesc={viewedTask.shortDesc} />
            <BrowserRouter>
                <AppRouter isLoggedIn={true} />
            </BrowserRouter>
            <p>Footer</p>
        </div>
    );
}


export default connect((state)=>({
  viewedTitleIndex: state.main.viewedTitleIndex,
  tasksArray: state.main.tasksArray
}), {
})(App)
