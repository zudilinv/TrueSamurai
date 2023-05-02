import React from "react";
import s from "./Users.module.css";
import mafia from "../assecs/images/mafia.png";
import {UsersType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
    users: UsersType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    onPageChanger: (pageNumber: number) => void
}
export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 100)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(page => {
                    const selectClass = props.currentPage === page ? s.selectedPage : ""

                    return  <span className={selectClass + ' ' + s.span}
                                  onClick={(e)=>{props.onPageChanger(page)}}>{page}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img className={s.img} src={u.photos.small ? u.photos.small : mafia}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {withCredentials: true,
                                        headers:{
                                            "API-KEY": "e7dbe18d-4606-4015-93d9-5351b99c88ef"
                                        }})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                        })

                                }}>Unfollow</button>
                                :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {}, {withCredentials: true,
                                            headers:{
                                                "API-KEY": "e7dbe18d-4606-4015-93d9-5351b99c88ef"
                                            }})
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>Follow</button>
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
                </div>)}
        </div>
    );
};

