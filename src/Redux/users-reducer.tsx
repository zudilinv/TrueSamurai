

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
    isFetching: boolean,
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}
type ActionType = ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
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
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}


export const follow = (id: string) => {
    return {
        type: "FOLLOW",
        userId: id,
    }as const
}
export const unFollow = (id: string) => {
    return {
        type: "UNFOLLOW",
        userId: id,
    }as const
}
export const setUsers = (users: UsersType[]) => {
    return {
        type: "SET-USERS",
        users: users,
    }as const
}
export const setCurrentPage = (currentPage: number)=> {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage,
    }as const
}
export const setTotalUsersCount = (totalCount: number)=> {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalCount: totalCount,
    }as const
}
export const setIsFetching = (isFetching: boolean)=> {
    return {
        type: "SET-IS-FETCHING",
        isFetching: isFetching,
    }as const
}