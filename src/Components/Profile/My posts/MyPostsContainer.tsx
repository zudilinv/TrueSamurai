import React, {ChangeEvent} from "react";
import {
    addPostActionCreator, PostsType,
    updateNewPostActionCreator
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
        addPost: () => dispatch(addPostActionCreator()),
        onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
            dispatch(updateNewPostActionCreator(e.currentTarget.value)),
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);