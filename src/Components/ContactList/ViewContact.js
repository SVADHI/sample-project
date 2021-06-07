import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import getAllContacts, { getSingleContact,deleteContact } from '../../Store/Actions/contacts-actions'
const ViewContact = ({contact,getSingleContact}) => {


    useEffect(() => {
        getSingleContact(1)
    }, [])
    console.log("contact view",contact);
    return (
        <div>
            
        </div>
    );
};
const mapSateToProps=(state)=>{
    return{
      contact:state.contact
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getSingleContact:(index)=>dispatch(getSingleContact(index)),
    }
}


export default connect(mapSateToProps,mapDispatchToProps)(ViewContact);