import React, {ChangeEvent} from "react";
import {
    addPost,
    PostsType,
    updateNewPost
} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: PostsType[],
    newPostText: string,
}
type MapDispatchPropsType = {
    addPost: () => void,
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilesPage.posts,
        newPostText: state.profilesPage.newPostText,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => dispatch(addPost()),
        onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
            dispatch(updateNewPost(e.currentTarget.value)),
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);