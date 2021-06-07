import React ,{useEffect,useState} from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import getAllContacts, { getSingleContact,deleteContact } from '../../Store/Actions/contacts-actions'
import AddEditContact from './AddEditContact'
import ViewContact from './ViewContact'

 function ContactList( {getAllContacts,contacts,getSingleContact,contact,deleteContact}) {
    
    const [filter,setFilter] = useState([])
    
   /*  const contacts = [
        {Sno:1,Name:"suri",Phoneno:9885885090 ,Email:"suri@gmail.com"},
        {Sno:2,Name:"ramu",Phoneno:9885885040 ,Email:"ramu@gmail.com"},
        {Sno:3,Name:"gedda",Phoneno:9963535320 ,Email:"gedda@gmail.com"},
        {Sno:4,Name:"helo",Phoneno:9885445090 ,Email:"thota@gmail.com"},
    ] */

  useEffect(() => {
     getAllContacts();

     
  }, [])
  console.log("hello",contacts);

  const deleteContacts = (index1)=>{

    const res = window.confirm("would you like to delete")
    if(res){
       deleteContact(index1);
    }
  }

  console.log("contact single",contact);

  let filteredTable =[]
  const searchTable1 =(data)=>{
    console.log("search data",data)

     filteredTable = contacts.filter((contact)=>{
      return contact.Name.toLowerCase().includes(data.toLowerCase())
    })
    console.log("filtered data",filteredTable);
    setFilter(filteredTable)
  }


    return (       
        <div style ={{overflowY :'scroll'}}>
            <Header searchTable ={(data)=>searchTable1(data)}/>
            <div className ="container d-flex flex-row justify-content-between mt-4">
            <p>Contact List</p>
            <button className ="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">+ add contact</button>
            </div>
            <div className ="container mt-4">
            {contacts.length ===0 ? <p className ="text-danger">No contacts found</p>:""}
            {contacts.length>0&& <table className="table">
  <thead>
    <tr>
      <th scope="col">SNO</th>
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email Address</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
     
      { contacts.map((contact,index)=>(
     <tr key ={index}>
     <th >{index+1}</th>
     <td>{contact.Name}</td>
     <td>{contact.Phoneno}</td>
     <td>{contact.Email}</td>
     <td><button className ="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick ={()=>getSingleContact(index)}>Edit</button>&nbsp; <button className ="btn btn-danger" onClick ={()=>deleteContacts(index)}>Delete</button> <a  href ="" target ="_blank"> <button className ="btn btn-primary"   onClick ={()=>getSingleContact(index)}>VIEW</button></a></td>
   
   </tr>
      ))}
   
    
  </tbody>
</table>}





<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
   <AddEditContact editContactsData = {contact}/>
  </div>
</div>
            </div>
            <ViewContact/>
        </div>
    )
}

const mapSateToProps =(state)=>{
    return {
      contacts:state.contacts,
      contact:state.contact
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
     getAllContacts:()=> dispatch(getAllContacts()),
     getSingleContact:(index)=>dispatch(getSingleContact(index)),
     deleteContact:(index1)=>dispatch(deleteContact(index1)),
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(ContactList)