import {v1} from "uuid";

type LocationType = {
    country: string
    city: string
}
export type UsersType = {
    id: string
    photosUrl: string
    followed: boolean
    name: string
    status: string
    location: LocationType

    photos: {small: string, large: string}
    // uniqueUrlName: null
}
export type UsersPageType = {
    users: UsersType[]
}

let initialState: UsersPageType = {
    users: []
}

export type ActionType = ReturnType<typeof FollowAC> | ReturnType<typeof UnFollowAC> | ReturnType<typeof SetUsersAC>
export const usersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state,
            users: state.users.map(u=>u.id === action.userId ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state,
                users: state.users.map(u=>u.id === action.userId ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const FollowAC = (id: string) => {
    return {
        type: "FOLLOW",
        userId: id,
    }as const
}
export const UnFollowAC = (id: string) => {
    return {
        type: "UNFOLLOW",
        userId: id,
    }as const
}
export const SetUsersAC = (users: UsersType[])=> {
    return {
        type: "SET-USERS",
        users: users,
    }as const
}