import * as firebase from 'firebase';
import {config_firebase} from './config';

// Initialize Firebase
 const config = config_firebase;
 //firebase.initializeApp(config);
export const firebaseApp = firebase.initializeApp(config)

export const goalRef = firebase.database().ref('goals');

export const completeGoalRef = firebase.database().ref('completeGoals');
