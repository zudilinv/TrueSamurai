import {v1} from "uuid";

export type MessagesType = {
    id: string,
    message: string
}
export type DialogsType = {
    id: string,
    name: string
}
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageText: string
}

let initialState: DialogsPageType = {
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
    newMessageText: "",
}

export type ActionType = ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case  "ADD-MESSAGE":
            const newMessage: MessagesType = {
                id: v1(),
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: "", messages: [...state.messages, newMessage]
            };
        case "UPDATE-NEW-MESSAGE":
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state
    }
}
export const addMessageActionCreator = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const updateNewMessageActionCreator = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE",
        newMessage: newMessage
    } as const
}