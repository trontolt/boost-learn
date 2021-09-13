import { BrowserRouter} from 'react-router-dom';
import {AppRouter} from './routes/index'

import './App.css';

function App() {
  return (
    <div className="App">
       <p>Header</p>
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
