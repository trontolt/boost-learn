import { BrowserRouter} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Header from '../src/components/header/header';
import { setViewedTitleIndex } from './core/actions/main.action'
import {AppRouter} from './routes/index'

import './App.css';

function App(props) {
  const { setViewedTitleIndex } = props;
  return (
    <div className="App">
       <Header/>
            <BrowserRouter>
                <AppRouter
                    setViewedTitleIndex={setViewedTitleIndex}
                    isLoggedIn={true}
                />
            </BrowserRouter>
        <p>Footer</p>
    </div>
  );
}


export default connect((state)=>({
  selectedTitleIndex: state.selectedTitleIndex
}), {
  setViewedTitleIndex
})(App)
