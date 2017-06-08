import React,{Component} from 'react'
import {connect} from 'react-redux';
import {completeGoalRef } from '../firebase';

class CompleteGoalItem extends Component {



  render(){
      const { email , title} = this.props.completeGoal;
    return (
      <div style={{margin: '5px'}}>
      <strong>{title}</strong>
    <span>completed by <em>{email}</em></span>

      </div>
    )
  }

}
function mapStateToProps(state){
    const {user} = state;
    return {
      user
    }
}

export default connect(mapStateToProps , null)(CompleteGoalItem);
