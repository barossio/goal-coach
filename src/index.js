import React from 'react';
import ReactDOM from 'react-dom';

import {firebaseApp} from './firebase';
import history from './history'
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {Provider} from 'react-redux';
import { createStore} from 'redux';

import  {Router,Switch , Route} from 'react-router-dom';
import reducer  from './reducers';
import {logUser} from './actions';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user=> {
  if(user) {
  //  console.log('user has signed in or up' , user);
    const {email} = user;
    store.dispatch(logUser(email))
    history.push('/app');
  }else {
  //  console.log('user has signed out or still needs to sign in');
    history.replace('/signin');
  }
});

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Switch>
      <Route path='/app' component={App} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </Switch>
  </Router>
  </Provider>
  , document.getElementById('root'));
