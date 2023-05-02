import React, {useEffect} from "react";
import {UsersType} from "../../Redux/users-reducer";
import axios from "axios"
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";

export type UsersPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    setIsFetching: (isFetching: boolean)=> void
}


export const UsersFunction: React.FC<UsersPropsType> = (props) => {

    useEffect(()=> {
        if (props.users.length === 0) {
            props.setIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`,
                {withCredentials: true})
                .then(response => {
                    props.setIsFetching(false)
                    props.setUsers(response.data.items)
                    props.setTotalUsersCount(response.data.totalCount)
                })
        }
    },[]);

    let onPageChanger = (pageNumber: number) => {
        props.setCurrentPage(pageNumber)
        props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`,
            {withCredentials: true})
            .then(response => {
                props.setIsFetching(false)
                props.setUsers(response.data.items)
            })
    }

        return (
            <div>
                {props.isFetching ? <Preloader/> : null}
                <Users users={props.users} totalUsersCount={props.totalUsersCount}
                       currentPage={props.currentPage} pageSize={props.pageSize}
                       follow={props.follow} unFollow={props.unFollow}
                       onPageChanger={onPageChanger}
                />
            </div>
        );
}
