

const initialContacts = {
contacts:[ {Name:"suri",Phoneno:9885887040,Email:"suri@gmail.com"},
{Name:"ramu",Phoneno:99635320,Email:"ramu@gmail.com"},
{Name:"rajesh",Phoneno:9791831780,Email:"rajesh@gmail.com"},

],
 contact:{},
}



const ContactsReducer = (state =initialContacts,action)=>{
   
    switch(action.type){
        case'GET_ALL_CONTACTS': return {...state};
        case'ADD_CONTACT':{
            let contacts = [...state.contacts];
            contacts.push(action.payload);
            return {...state,contacts:contacts};
        }

        case'EDIT_CONTACT':{
            let contacts = [...state.contacts];
            contacts[action.id]=action.payload;
            return {...state,contacts:contacts};
        }
        case'GET_SINGLE_CONTACT':{
        //let contacts = [...state.contacts];
        return {...state,contact:{...state.contacts[action.index],id:action.index}};
        } 
        
        case'DELETE_CONTACT':{
            let contacts = [...state.contacts];
            contacts.splice(action.index,1);
            return {...state,contacts};
        };
        default: return state;
}
    }
    
export default ContactsReducer;