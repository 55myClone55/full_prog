import {UserAction,UserState,UserActionTypes} from '../../types/user'


const initialState:UserState = {
users:[],
loading:false,
error:null,
page:1,
limit:15
}

export const userReducer = (state = initialState, action:UserAction): UserState => {
    switch(action.type){
case UserActionTypes.FETCH_USERS:
    return {...state,error:null,loading:true,users:[]}
    
    case UserActionTypes.FETCH_USERS_SUCCESS:
    return {...state,error:null,loading:false,users:action.payload}
    
    case UserActionTypes.FETCH_USERS_ERROR:
    return {...state,error:action.payload, loading:false, users:[]}
    case UserActionTypes.SET_TODO_PAGE:
    return {...state,page:action.payload}
    default:
        return state
    
}
}