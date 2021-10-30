
export enum UserActionTypes{
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

export interface UserState{
    users:any[];
    loading:boolean;
    error:null | string;
    page:number;
    limit:number;
}

interface FetchUsersAction{
    type:UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction{
    type:UserActionTypes.FETCH_USERS_SUCCESS;
    payload:any[];
}
interface FetchUsersErrorsAction{
    type:UserActionTypes.FETCH_USERS_ERROR;
    payload:string;
}
interface SetTodoPage{
    type:UserActionTypes.SET_TODO_PAGE;
    payload:number;
   }

// interface UserAction{
//     type:string;
//     payload?: any;
// }
export type UserAction = FetchUsersAction | FetchUsersErrorsAction |FetchUsersSuccessAction | SetTodoPage


