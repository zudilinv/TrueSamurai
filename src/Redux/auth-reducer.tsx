export type AuthType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}
// export type AuthDataType = {
//     data: AuthType
// }

let initialState: AuthType = {
    id: 2,
    email: "blabla@bla.bla",
    login: "samurai",
    isAuth: false
}

type ActionType = ReturnType<typeof setAuthUserData>
export const authReducer = (state = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}
export const setAuthUserData = (data: AuthType) => {
    return {
        type: "SET-USER-DATA",
        data: data
    } as const
}