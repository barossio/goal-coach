import React ,{Component} from 'react' ;
import {completeGoalRef } from '../firebase';
import {setCompleteGoals} from '../actions';
import {connect} from 'react-redux';
import CompleteGoalItem from './CompleteGoalItem';

class CompleteGoalList extends Component{
  componentDidMount(){
      completeGoalRef.on('value', snap => {
        let completeGoals =[];
        snap.forEach(completeGoal => {
          //let goalObject = goal.val();
          const {email,title}  = completeGoal.val();
          const serverKey = completeGoal.key;
          completeGoals.push({email,title, serverKey});
        });
        this.props.setCompleteGoals(completeGoals);
        console.log('this.props.completeGoals' , this.props.completeGoals);

      })
  }

  clearCompleted (){
      completeGoalRef.set([]);
  }

    render(){
      return (
        <div>
        {
          this.props.completeGoals.map((completeGoal,index) =>{
            return (
              <CompleteGoalItem key={index} completeGoal={completeGoal} />
            )
          })
        }
        <button style={{marginRight :'5px'}}
        className='btn btn-sm btn-primary'
         onClick={()=> this.clearCompleted()}>Clear
         </button>
        </div>
      )
    }
  }

  function mapStateToProps(state){
    const {completeGoals} = state;
    return {
      completeGoals
    }
  }

  export default connect(mapStateToProps , {setCompleteGoals})(CompleteGoalList);
