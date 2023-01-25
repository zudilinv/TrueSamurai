import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../Redax/state";


export type ProfileType = {
    posts: PostsType[]
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}