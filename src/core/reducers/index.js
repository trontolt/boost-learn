import { combineReducers } from 'redux';

const rootReducer = () =>
  combineReducers({
    admin: ()=> { return {name: 'test', secondName: 'second_test'}}
  });
  export default rootReducer;