import React, {useEffect} from "react";
import {UsersType} from "../../Redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios"
import avatar from "../assecs/images/avatar.png"
import {Users} from "./Users";

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
}


export const UsersFunction: React.FC<UsersPropsType> = (props) => {

    useEffect(()=> {
        if (props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
                .then(response => {
                    props.setUsers(response.data.items)
                    props.setTotalUsersCount(response.data.totalCount)
                })
        }
    },[]);

    let onPageChanger = (pageNumber: number) => {
        props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 1000)
    let pages = []
    for (let i = 1; i <= pagesCount ; i++) {
        pages.push(i)
    }


        return (
            <div>
                <Users users={props.users} totalUsersCount={props.totalUsersCount}
                       currentPage={props.currentPage} pageSize={props.pageSize}
                       follow={props.follow} unFollow={props.unFollow}
                       onPageChanger={onPageChanger}
                />
            </div>
        );
}
