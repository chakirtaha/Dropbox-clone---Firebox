import authReducer from './authReducer'
import fileReducer from './fileReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  file: fileReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer