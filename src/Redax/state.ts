import {v1} from "uuid";


export type RootStateType = {
    profilesPage: ProfilesPageType,
    dialogsPage: DialogsPageType,
    sideBar: SideBarPageType


}
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],

}
export type ProfilesPageType = {
    posts: PostsType[],
}

export type DialogsType = {
    id: string,
    name: string
}
export type MessagesType = {
    id: string,
    message: string
}
export type PostsType = {
    id: string,
    message: string,
    likesCount: number,
}

export type SideBarPageType = {}

export let state: RootStateType = {

    dialogsPage: {
        dialogs: [
            {id: v1(), name: "Dimych"},
            {id: v1(), name: "Andrew"},
            {id: v1(), name: "Sveta"},
            {id: v1(), name: "Anna"},
        ],
        messages: [
            {id: v1(), message: "Hello!"},
            {id: v1(), message: "Hi!"},
            {id: v1(), message: "How are you?"},
            {id: v1(), message: "Yooo!!!"},
        ],
    },

    profilesPage: {
        posts: [
            {id: v1(), message: "Hi, how are you?", likesCount: 21},
            {id: v1(), message: "It is my first post", likesCount: 12},
        ],
    },

    sideBar: {},
}






