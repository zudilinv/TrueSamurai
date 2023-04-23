import React from "react";
import s from "./Users.module.css";
import mafia from "../assecs/images/mafia.png";
import {UsersType} from "../../Redux/users-reducer";

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

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 1000)

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
                            <img className={s.img} src={u.photos.small ? u.photos.small : mafia}/>
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
                </div>)}
        </div>
    );
};

