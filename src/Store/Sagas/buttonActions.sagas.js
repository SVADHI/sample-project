import axios from "axios"
import {all, put, takeEvery, takeLatest,call, delay} from "redux-saga/effects"


export function* Increment(){
    console.log("hello increment")
    //yield delay(4000)
    yield put({type:"INCREMENT_SUCCESS"})
}

export function* Decrement(){
    console.log("hello DECREMENT")
  // yield delay(4000)
    yield put({type:"DECREMENT_SUCCESS"})
}

export function* getAllUsers(){
    try{
        yield delay(5000)
     let users =  yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
     yield put ({type:'GETALL_USERS_SUCCESS',data:users.data})
    }catch(error){
     yield put({type:'GETALL_USERS_FAILED',message:error.message})
    }
}

export function* watchButtonActions(){
    yield ([takeLatest("INCREMENT",Increment),takeLatest("DECREMENT",Decrement),
    takeLatest("GETALL_USERS",getAllUsers)])
}