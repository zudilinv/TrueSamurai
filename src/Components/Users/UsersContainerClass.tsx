import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UsersType
} from "../../Redux/users-reducer";
import UsersAPIComponentClass from "./UsersAPIComponentClass";

type MapStatePropsTypeC = {
    users: UsersType[],
    currentPage: number,
    pageSize: number,
    totalUsersCount: number,
    isFetching: boolean,
}
type MapDispatchPropsTypeC = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setIsFetching: (isFetching: boolean)=> void
}
let mapStateToProps = (state: AppStateType): MapStatePropsTypeC => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
export let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsTypeC => {
    return {
        follow: (userId: string) => dispatch(follow(userId)),
        unFollow: (userId: string) => dispatch(unFollow(userId)),
        setUsers: (users: UsersType[]) => dispatch(setUsers(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCount(totalCount)),
        setIsFetching: (isFetching: boolean) => dispatch(setIsFetching(isFetching))
    }
}

export const UsersContainerClass = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponentClass)

