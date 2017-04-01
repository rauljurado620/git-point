import { combineReducers } from 'redux';
import authReducer from './auth';
import authUserReducer from './authUser';
import userReducer from './user';
import userEventsReducer from './userEvents';
import repositoryReducer from './repository';
import organizationReducer from './organization';
import userInfoListReducer from './userInfoList';
import issueReducer from './issue';

const rootReducer = combineReducers({
  auth: authReducer,
  authUser: authUserReducer,
  user: userReducer,
  userEvents: userEventsReducer,
  repository: repositoryReducer,
  organization: organizationReducer,
  userInfoList: userInfoListReducer,
  issue: issueReducer,
});

export default rootReducer;
