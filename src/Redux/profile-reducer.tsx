import {v1} from "uuid";

export type ProfilesPageType = {
    posts: PostsType[],
    newPostText: string
}
export type PostsType = {
    id: string,
    message: string,
    likesCount: number,
}
let initialState: ProfilesPageType = {
    posts: [
        {id: v1(), message: "Hi, how are you?", likesCount: 21},
        {id: v1(), message: "It is my first post", likesCount: 12},
    ],
    newPostText: "It-kamasutra.com",
}
export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostActionCreator>
export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case  "ADD-POST":
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                newPostText: "", posts: [...state.posts, newPost]
            }
        case "UPDATE-NEW-POST":
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}
export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST",
        newText: newText
    } as const
}