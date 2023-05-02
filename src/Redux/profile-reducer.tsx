import {v1} from "uuid";

export type ProfilesPageType = {
    posts: PostsType[],
    newPostText: string
    profile: ProfileType
}
export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}
export type PhotosType = {
    small: string,
    large: string
}
export type ContactsType = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string
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
    profile: {
        "aboutMe": "я крутой чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": "",
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": "",
            "github": "github.com",
            "mainLink": ""
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
}
export type ActionType = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPost>
    | ReturnType<typeof setUserProfile>
export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case  "ADD-POST":
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
            };
            return {...state, newPostText: "", posts: [...state.posts, newPost]}
        case "UPDATE-NEW-POST":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export const addPost = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPost = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST",
        newText: newText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}