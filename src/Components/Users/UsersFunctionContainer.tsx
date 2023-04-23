import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    UnFollowAC,
    UsersType
} from "../../Redux/users-reducer";
import {UsersFunction} from "./UsersFunction";

type MapStatePropsType = {
    users: UsersType[],
    pageSize: number,
    currentPage: number,
    totalUsersCount: number,
}
type MapDispatchPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
export let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => dispatch(FollowAC(userId)),
        unFollow: (userId: string) => dispatch(UnFollowAC(userId)),
        setUsers: (users: UsersType[]) => dispatch(SetUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(SetCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalCount: number) => dispatch(SetTotalUsersCountAC(totalCount)),
    }
}

export const UsersFunctionContainer = connect(mapStateToProps, mapDispatchToProps)(UsersFunction)

