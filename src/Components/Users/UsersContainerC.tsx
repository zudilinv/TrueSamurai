import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {FollowAC, SetUsersAC, UnFollowAC, UsersType} from "../../Redux/users-reducer";
import UsersC from "./UsersC";



type MapStatePropsTypeC = {
    users: UsersType[]
}
type MapDispatchPropsTypeC = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsTypeC => {
    return {
        users: state.usersPage.users
    }
}
export let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsTypeC => {
    return {
        follow: (userId: string) => dispatch(FollowAC(userId)),
        unFollow: (userId: string) => dispatch(UnFollowAC(userId)),
        setUsers: (users: UsersType[]) => dispatch(SetUsersAC(users)),
    }
}

export const UsersContainerC = connect(mapStateToProps, mapDispatchToProps)(UsersC)

