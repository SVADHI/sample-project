import React from 'react'

function LoginForm({Login,error}) {

    const [details, setDetails] = useState({name:"",email:"",password:""})

    const submitHandler =(e)=>{
        e.preventDefault();
        Login(details)
    }
    return (
        
            <form onSubmit ={submitHandler}>
               <div className ="form-inner">
                 <h2>Login form</h2>
                 <div className ="form-grop">
                     <label htmlFor ="name" >Name:</label>
                     <input type ="text" name ="name" id="name"/>
                 </div>
                 <div className ="form-grop">
                     <label htmlFor ="email" >Email:</label>
                     <input type ="text" name ="email" id="email"/>
                 </div>
                 <div className ="form-grop">
                     <label htmlFor ="password" >Name:</label>
                     <input type ="text" name ="password" id="password"/>
                 </div>
                 <input type ="submit" value ="login"/>
               </div>
            </form>
        
    )
}

export default LoginForm
