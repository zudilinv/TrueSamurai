import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsType} from "../../../Redux/profile-reducer";

type MyPostsType = {
    posts: PostsType[]
    newPostText: string
    addPost: () => void
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
export const MyPosts = (props: MyPostsType) => {

    console.log('posts', props.posts)

    const postsElements =
        props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>))

    const addPostHandler = () => {
        props.addPost()
    }
    const updateNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={updateNewPostHandler}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}