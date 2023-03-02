import {v1} from "uuid";
import {addPostActionCreator, profileReducer, updateNewPostActionCreator} from "./profile-reducer";
import {addMessageActionCreator, dialogsReducer, updateNewMessageActionCreator} from "./dialogs-reducer";

export type RootStateType = {
    profilesPage: ProfilesPageType,
    dialogsPage: DialogsPageType,
    sideBar: SideBarPageType
}
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageText: string
}
export type ProfilesPageType = {
    posts: PostsType[],
    newPostText: string
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


export type StoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    _callSubscriber: () => void,
    subscriber: (observer: () => void) => void,
    dispatch: (action: ActionType) => void
}
export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostActionCreator>
                         | ReturnType<typeof addMessageActionCreator> | ReturnType<typeof updateNewMessageActionCreator>

export const store: StoreType = {
    _state: {
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
            newMessageText: "Samurai-way.com",
        },

        profilesPage: {
            posts: [
                {id: v1(), message: "Hi, how are you?", likesCount: 21},
                {id: v1(), message: "It is my first post", likesCount: 12},
            ],
            newPostText: "It-kamasutra.com",
        },

        sideBar: {},
    },

    _callSubscriber() {
        console.log("State was changed")
    },

    subscriber(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state
    },
     dispatch(action) {
         this._state.profilesPage = profileReducer(this._state.profilesPage, action)
         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
         //this._state.sideBar = dialogsReducer(this._state.sideBar, action)

         this._callSubscriber()
     }
}


// export type AddPostActionType = {
//     type: "ADD-POST"
//
// }
// export type UpdateNewMessageActionType = {
//     type: "UPDATE-NEW-MESSAGE"
//     newMessage: string
// }
// export type AddPostActionType = ReturnType<typeof addPostActionCreator>
// export type UpdateNewPostActionType = ReturnType<typeof updateNewPostActionCreator>
// export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
// export type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageActionCreator>



// dispatch(action) {
//     if (action.type === "ADD-POST") {
//         const newPost: PostsType = {
//             id: v1(),
//             message: this._state.profilesPage.newPostText,
//             likesCount: 0,
//         };
//         this._state.profilesPage.posts.push(newPost)
//         this._state.profilesPage.newPostText = ""
//         this._callSubscriber();
//     } else if (action.type === "UPDATE-NEW-POST") {
//         this._state.profilesPage.newPostText = action.newText;
//         this._callSubscriber();
//     } else if (action.type === "ADD-MESSAGE") {
//         const newMessage: MessagesType = {
//             id: v1(),
//             message: this._state.dialogsPage.newMessageText
//         }
//         this._state.dialogsPage.messages.push(newMessage)
//         this._state.dialogsPage.newMessageText = ""
//         this._callSubscriber()
//     } else if (action.type === "UPDATE-NEW-MESSAGE") {
//         this._state.dialogsPage.newMessageText = action.newMessage
//         this._callSubscriber()
//     }
// }

// let rerenderEntireTree = () => {
//     console.log("State was changed")
// }
//  export let state: RootStateType = {
//     dialogsPage: {
//         dialogs: [
//             {id: v1(), name: "Dimych"},
//             {id: v1(), name: "Andrew"},
//             {id: v1(), name: "Sveta"},
//             {id: v1(), name: "Anna"},
//         ],
//         messages: [
//             {id: v1(), message: "Hello!"},
//             {id: v1(), message: "Hi!"},
//             {id: v1(), message: "How are you?"},
//             {id: v1(), message: "Yooo!!!"},
//         ],
//         newMessageText: "Samurai-way.com",
//     },
//
//     profilesPage: {
//         posts: [
//             {id: v1(), message: "Hi, how are you?", likesCount: 21},
//             {id: v1(), message: "It is my first post", likesCount: 12},
//         ],
//         newPostText: "It-kamasutra.com",
//     },
//
//     sideBar: {},
// };
// export const addPost = () => {
//     const newPost: PostsType = {
//         id: v1(),
//         message: state.profilesPage.newPostText,
//         likesCount: 0,
//     };
//     state.profilesPage.posts.push(newPost)
//     state.profilesPage.newPostText = ""
//     rerenderEntireTree();
// };
// export const updateNewPost = (newText: string) => {
//     state.profilesPage.newPostText = newText;
//     rerenderEntireTree();
// };
// export const addMessage = () => {
//     const newMessage: MessagesType =  {
//         id: v1(),
//         message: state.dialogsPage.newMessageText
//     }
//     state.dialogsPage.messages.push(newMessage)
//     state.dialogsPage.newMessageText= ""
//     rerenderEntireTree()
// }
// export const updateNewMessage = (newMessage: string) => {
//     state.dialogsPage.newMessageText = newMessage
//     rerenderEntireTree()
// }
//
// export const subscriber = (observer: ()=>void) => {
//     rerenderEntireTree = observer;
// }


//     addPost: () => void,
//     updateNewPost: (newText: string) => void,
//     addMessage: () => void,
//     updateNewMessage: (newMessage: string) => void,

// addPost() {
//     const newPost: PostsType = {
//         id: v1(),
//         message: this._state.profilesPage.newPostText,
//         likesCount: 0,
//     };
//     this._state.profilesPage.posts.push(newPost)
//     this._state.profilesPage.newPostText = ""
//     this._callSubscriber();
// },
// updateNewPost(newText: string) {
//     this._state.profilesPage.newPostText = newText;
//     this._callSubscriber();
// },
// addMessage() {
//     const newMessage: MessagesType = {
//         id: v1(),
//         message: this._state.dialogsPage.newMessageText
//     }
//     this._state.dialogsPage.messages.push(newMessage)
//     this._state.dialogsPage.newMessageText = ""
//     this._callSubscriber()
// },
// updateNewMessage(newMessage: string) {
//     this._state.dialogsPage.newMessageText = newMessage
//     this._callSubscriber()
// },
