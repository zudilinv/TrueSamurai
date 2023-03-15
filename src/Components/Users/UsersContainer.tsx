import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {FollowAC, SetUsersAC, UnFollowAC, UsersType} from "../../Redux/users-reducer";


type MapStatePropsType = {
    users: UsersType[]
}
type MapDispatchPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
export let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => dispatch(FollowAC(userId)),
        unFollow: (userId: string) => dispatch(UnFollowAC(userId)),
        setUsers: (users: UsersType[]) => dispatch(SetUsersAC(users)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

