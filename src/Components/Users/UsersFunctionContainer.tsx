import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UsersType
} from "../../Redux/users-reducer";
import {UsersFunction} from "./UsersFunction";

type MapStatePropsType = {
    users: UsersType[],
    pageSize: number,
    currentPage: number,
    totalUsersCount: number,
    isFetching: boolean,
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
export const UsersFunctionContainer = connect(mapStateToProps, {
    follow,       // follow: FollowAC --- Можно удалить -АС- и с маленькой буквы -F- и сократить ещё запись кода
    unFollow,                      //  unFollow: unFollowAC,
    setUsers,                      //  setUsers: setUsersAC,
    setCurrentPage,                //  setCurrentPage: setCurrentPageAC,
    setTotalUsersCount,            //  setTotalUsersCount: setTotalUsersCountAC,
    setIsFetching                  //  setIsFetching: setIsFetchingAC
})
(UsersFunction)

// type MapDispatchPropsType = {
//     follow: (userId: string) => void
//     unFollow: (userId: string) => void
//     setUsers: (users: UsersType[]) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalUsersCount: number) => void
//     setIsFetching: (isFetching: boolean)=> void
// }

// export let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: string) => dispatch(FollowAC(userId)),
//         unFollow: (userId: string) => dispatch(UnFollowAC(userId)),
//         setUsers: (users: UsersType[]) => dispatch(SetUsersAC(users)),
//         setCurrentPage: (currentPage: number) => dispatch(SetCurrentPageAC(currentPage)),
//         setTotalUsersCount: (totalCount: number) => dispatch(SetTotalUsersCountAC(totalCount)),
//         setIsFetching: (isFetching: boolean) => dispatch(SetIsFetchingAC(isFetching))
//
//     }
// }
