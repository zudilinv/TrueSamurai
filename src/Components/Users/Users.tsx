import React from "react";
import {UsersType} from "../../Redux/users-reducer";
import s from "./Users.module.css"
import {v1} from "uuid";

export type UsersPropsType = {
    users: UsersType[]
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                fotoUrl: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1678817699~exp=1678818299~hmac=6f2327c449d851fa1bf2516cecf9b4efe8149d9d0815a11ccf4dd151efdd7541",
                followed: true,
                fullName: "Alex K",
                status: "I`m Boss",
                location: {country: "Belarus", city: "Minsk"}
            },
            {
                id: v1(),
                fotoUrl: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1678817699~exp=1678818299~hmac=6f2327c449d851fa1bf2516cecf9b4efe8149d9d0815a11ccf4dd151efdd7541",
                followed: false,
                fullName: "Anna N",
                status: "I`m girl",
                location: {country: "Ukraine", city: "Kiev"}
            },
            {
                id: v1(),
                fotoUrl: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1678817699~exp=1678818299~hmac=6f2327c449d851fa1bf2516cecf9b4efe8149d9d0815a11ccf4dd151efdd7541",
                followed: true,
                fullName: "Ivan S",
                status: "I`m boy",
                location: {country: "Russia", city: "Moscow"}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.img} src={u.fotoUrl}/>
                        </div>
                        <div>
                            {u.followed ?
                            <button onClick={()=>{props.unFollow(u.id)}}>Follow</button> :
                            <button onClick={()=>{props.follow(u.id)}}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

