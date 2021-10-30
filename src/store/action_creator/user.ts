import axios from "axios"
import { Dispatch } from "redux"
import { setTimeout } from "timers"
import { UserAction, UserActionTypes } from "../../types/user"


export const fetchUsers = (page = 1,limit = 15) => {
return async(dispatch:Dispatch<UserAction>)=>{
    try {
        dispatch({type:UserActionTypes.FETCH_USERS})
        const response = await axios.get('https://api.sampleapis.com/countries/countries')
        // ,{
        //     params:{_page:page,limit: limit}
        //https://restcountries.eu/rest/v2/all
        // }
        setTimeout(() => {
            dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS,payload:response.data})
        }, 500);
    } catch (e) {
        dispatch({type:UserActionTypes.FETCH_USERS_ERROR,
            payload:"ERRoRRRRRRRR 404"
        })
    }
}
}
export function setUserPage(page:number):UserAction {
    return {type:UserActionTypes.SET_TODO_PAGE, payload:page}
}