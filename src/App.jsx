import { BrowserRouter} from 'react-router-dom';

import Header from '../src/components/header/header';
import {AppRouter} from './routes/index'

import './App.css';

function App() {
  return (
    <div className="App">
       <Header/>
            <BrowserRouter>
                <AppRouter
                    isLoggedIn={true}
                />
            </BrowserRouter>
        <p>Footer</p>
    </div>
  );
}

export default App;
