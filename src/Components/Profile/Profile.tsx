import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ActionType, PostsType} from "../../Redax/store";
import {type} from "os";


export type ProfileType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionType) => void

}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}