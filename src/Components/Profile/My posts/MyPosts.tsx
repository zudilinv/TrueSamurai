import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ActionType, PostsType} from "../../../Redax/store";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redax/profile-reducer";


type MyPostsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}


export const MyPosts = (props: MyPostsType) => {



    const postsElements =
        props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>))

    const addPostHandler = () => {
        props.dispatch(addPostActionCreator())
    }
    const updateNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostActionCreator(e.currentTarget.value))
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