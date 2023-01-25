import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsType} from "../../../Redax/state";


type MyPostsType = {
    posts: PostsType[]
}

export const MyPosts = (props: MyPostsType) => {

    const postsElements = [
        props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>))
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>

                {postsElements}

            </div>
        </div>
    )
}