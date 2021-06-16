import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';

import {increment,getAllUsers} from '../../Store/Actions/buttonActions'

const SagaExample = ({Increment,Decrement,count,getAllUsers,users1}) => {

    
    const [countData,setCountData] = useState("")

    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
      ]
    const [users,setUsers] = useState([]);
    const [search,setSearch] = useState();

    const getData = async()=>{
        const users1 = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await users1.json();
        console.log("users data",result)
        setUsers(result);
    }
    useEffect(() => {
     getData();
    }, [])

   

    const deleteUsers = (id)=>{
     console.log("selected id",id)
       let newUsers = []
       
       newUsers= users.filter((user) => {
          return user.id !== id;
        }) 
     
     console.log("new users ",newUsers);
     //setUsersData(newUsers)
     setUsers(newUsers);
    }
    return (
        <div >
            <button onClick ={Increment}>increment</button>
            <p>{count}</p>
            <button onClick ={Decrement}>decrement</button>
            <button >Get All Users</button>
            <input  type ="text" placeholder ="search" value ={search} onChange ={(e)=>setSearch(e.target.value)}/>
            {users && users.map(user=>{
                return <li key ={user.id} >{user.name}<button onClick = {()=>deleteUsers(user.id)} style ={{cursor:'pointer',listStyle:'number',margin:'10px'}}>DELETE</button> <button>Edit</button></li>
            })}
        </div>
    );
};

const mapStateToProps =(state)=>{
    return{
        count:state.count,
        users1:state.users
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        Increment:()=>dispatch({type:'INCREMENT'}), 
        //Increment:()=>dispatch(increment()),
        Decrement:()=>dispatch({type:'DECREMENT'}),
        getAllUsers:()=>dispatch(getAllUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SagaExample);