

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
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
}
type ActionType = ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof SetUsersAC>
    | ReturnType<typeof SetCurrentPageAC>
    | ReturnType<typeof SetTotalUsersCountAC>
export const usersReducer = (state = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state,
            users: state.users.map(u=>u.id === action.userId ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state,
                users: state.users.map(u=>u.id === action.userId ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalCount}
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
export const SetUsersAC = (users: UsersType[]) => {
    return {
        type: "SET-USERS",
        users: users,
    }as const
}
export const SetCurrentPageAC = (currentPage: number)=> {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage,
    }as const
}
export const SetTotalUsersCountAC = (totalCount: number)=> {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalCount: totalCount,
    }as const
}