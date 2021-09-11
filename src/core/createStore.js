import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './reducers/index';
import createRootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const Store = (history) => {
  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  );
  sagaMiddleware.run(createRootSaga);
  return store;
};
export default Store;