import React from "react";
import {UsersType} from "../../Redux/users-reducer";
import axios from "axios"
import {Users} from "./Users";

export type UsersAPIComponentClassPropsType = {
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
class UsersAPIComponentClass extends React.Component<UsersAPIComponentClassPropsType> {
        // constructor(props: UsersPropsType) { // Если не создаются доп условия
        //     super(props);}                   // constructor можно не писать
            componentDidMount() {
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                    .then(response => {
                        this.props.setUsers(response.data.items)
                        this.props.setTotalUsersCount(response.data.totalCount)
                    })
            }
            onPageChanger = (pageNumber: number) => {
                this.props.setCurrentPage(pageNumber)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                    .then(response => {
                        this.props.setUsers(response.data.items)
                    })
            }
    render() {

        return (
            <div>
                <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                       follow={this.props.follow} unFollow={this.props.unFollow}
                       onPageChanger={this.onPageChanger}
                 />
            </div>
        );
    }
}

export default UsersAPIComponentClass