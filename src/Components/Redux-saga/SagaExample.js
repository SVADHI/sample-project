import React from 'react';
import { connect } from 'react-redux';
import {Increment} from '../../Store/Sagas/buttonActions.sagas'
import {increment,getAllUsers} from '../../Store/Actions/buttonActions'

const SagaExample = ({Increment,Decrement,count,getAllUsers,users}) => {
    return (
        <div>
            <button onClick ={Increment}>increment</button>
            <p>{count}</p>
            <button onClick ={Decrement}>decrement</button>
            <button onClick = {getAllUsers}>Get All Users</button>
            {users && users.map(user=>{
                return <li key ={user.id}>{user.name}</li>
            })}
        </div>
    );
};

const mapStateToProps =(state)=>{
    return{
        count:state.count,
        users:state.users
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        //Increment:()=>dispatch({type:'INCREMENT'}), incrementButton
        Increment:()=>dispatch(increment()),
        Decrement:()=>dispatch({type:'DECREMENT'}),
        getAllUsers:()=>dispatch(getAllUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SagaExample);