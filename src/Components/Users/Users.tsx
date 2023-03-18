import React, {useEffect} from "react";
import {UsersType} from "../../Redux/users-reducer";
import s from "./Users.module.css"
import axios from "axios"
import avatar from "../assecs/images/avatar.png"

export type UsersPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}


export const Users: React.FC<UsersPropsType> = (props) => {

    useEffect(()=> {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    },[]);

        return (
            <div>
                {
                    props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.img} src={u.photos.small ? u.photos.small : avatar}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>Follow</button>
                                :
                                <button onClick={() => {
                                    props.follow(u.id)
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
