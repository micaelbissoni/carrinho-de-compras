export enum UsersTypes {
    LOGIN_REQUEST = '@Users/LOGIN_REQUEST',
    LOGIN_SUCCESS = '@Users/LOGIN_SUCCESS',
    LOGIN_FAILURE = '@Users/LOGIN_FAILURE',
}

export interface User {
    authToken: string
}  

export interface UserState {
    readonly data: User[]
    readonly loading: boolean
    readonly error: boolean
}
