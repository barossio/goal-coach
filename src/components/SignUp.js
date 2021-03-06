import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router-dom';
class SignUp extends Component {
constructor(props){
  super(props);
  this.state = {
    email: '',
    password : '',
    error : {
      message : ''
    }
  }
}

signUp (){
  console.log('this.state' , this.state);
  const {email ,password} = this.state;
  firebaseApp.auth().createUserWithEmailAndPassword(email,password)
  .catch(error => {
    console.log('error' , error);
    this.setState({error})
  });
}

  render() {
    return (
      <div className='form-inline'>
        <h2>Sign Up</h2>
        <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="email"
              onChange={event=> this.setState({email : event.target.value})}
              />
              <input
                className="form-control"
                type="password"
                placeholder="password"
                  onChange={event=> this.setState({password : event.target.value})}
                  style={{marginRight : '5px'}}
                />
                <button
                className="btn btn-primary"
                type="button"
                  style={{marginRight : '5px'}}
                onClick={ () => this.signUp()}
                >
                Sign Up
                </button>

        </div>
        <div>{this.state.error.message}
        </div>
        <div><Link to={'/signin'}> Already a user? Sign in instead</Link></div>

      </div>
    )
  }
}

export default SignUp;
