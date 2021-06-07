import React,{useState,useRef,useEffect} from 'react'
import { addContact,editContact } from '../../Store/Actions/contacts-actions';
import {connect} from "react-redux"

 function AddEditContact({addContact,editContactsData,editContact}) {
    const [contact,setContact] = useState([{
        Name:"",Phoneno:"",Email:""
    }])

    useEffect(() => {
       setContact(editContactsData)
    }, [editContactsData])
console.log("editcontact",editContactsData)
    const handleChange =(name,value)=>{
        const oldContact = {...contact};
         oldContact[name] = value;
        setContact(oldContact)
    }

    const closeRef = useRef()
    
    const handleSubmit =()=>{
      if(contact.id !== null && contact.id !== undefined){
       editContact(contact,contact.id);
       let oldContact = {...contact}
       oldContact.id = null;
       setContact(oldContact)
      }else{
        addContact(contact)
      }
        
        setContact({
            Name:"",
            Phoneno:"",
            Email:""
        })
        closeRef.current.click(); 
    }

    const handleCancel = ()=>{
      setContact({
        Name:"",
        Phoneno:"",
        Email:""
    })
    }
    return (
        <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add/Edit</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" ref = {closeRef}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
      <div class="form-group">
        <label htmlFor="name">Name</label>
        <input type="email" class="form-control" id="Name"  placeholder="Enter Name" value ={contact.Name} onChange ={(e)=>handleChange("Name",e.target.value)}/>
     </div>
     <div class="form-group">
        <label htmlFor="phoneno">Phoneno</label>
        <input type="email" class="form-control" id="Phoneno"  placeholder="Enter phoneno" value ={contact.Phoneno} onChange = {(e)=>handleChange("Phoneno",e.target.value)}/>
     </div>
  <div class="form-group">
    <label htmlFor="Email">Email address</label>
    <input type="email" class="form-control" id="Email"  placeholder="Enter email" value ={contact.Email} onChange = {(e)=>handleChange("Email",e.target.value)}/>
    
  </div>
 
  
</form>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick ={handleCancel}>Cancel</button>
        <button type="button" class="btn btn-primary" onClick ={handleSubmit}>Save </button>
      </div>
    </div>
    )
}

const mapSateToProps =(state)=>{
    return {
      contacts:state.contacts
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
     
     addContact:(contact)=>dispatch(addContact(contact)),
     editContact:(contact,id)=>dispatch(editContact(contact,id))
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(AddEditContact)