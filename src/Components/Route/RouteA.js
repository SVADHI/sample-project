import React,{useState} from 'react';
import "./RouteA.css"
import {useLocation, useParams,useHistory } from 'react-router-dom'
const RouteA = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    let {id} = useParams();
    let location = useLocation();
    let history = useHistory()

    const arr = [1,2,2,3,1,2]

     const res = arr.map((item,index)=>{
         return (index+1)*item;
     })
    console.log("required output is:",res)
    return (
        <div>
            <p>this is route a component {id}</p>
            <p>location pathname is:: {location.pathname}</p>
            {location.pathname ===`/routeA/${id}` ? (
                <button onClick ={()=>history.push("/test")}>backtolumino</button>
            ):null}

           
            
        </div>
    );
};

export default RouteA;