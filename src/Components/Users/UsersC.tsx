import React from "react";
import {UsersType} from "../../Redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios"
import mafia from "../assecs/images/mafia.png"


export type UsersPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}
class UsersC extends React.Component<UsersPropsType> {
        // constructor(props: UsersPropsType) { // Если не создаются доп условия
        //     super(props);}                   // constructor можно не писать
            componentDidMount() {
                axios.get("https://social-network.samuraijs.com/api/1.0/users")
                    .then(response => {
                        this.props.setUsers(response.data.items)
                    })
            }
    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.img} src={u.photos.small ? u.photos.small : mafia}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>Follow</button>
                                :
                                <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Unfollow</button>
                            }
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
    }
}

export default UsersC