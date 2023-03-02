import {v1} from "uuid";
import {ActionType, PostsType, ProfilesPageType} from "./store";

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    }as const
}
export const updateNewPostActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST",
        newText: newText
    }as const
}
export const profileReducer = (state: ProfilesPageType, action: ActionType) => {
    switch (action.type) {
        case  "ADD-POST":
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case "UPDATE-NEW-POST":
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}