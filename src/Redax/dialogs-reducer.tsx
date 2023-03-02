import {ActionType, DialogsPageType, MessagesType} from "./store";
import {v1} from "uuid";

export const addMessageActionCreator = () => {
    return {
        type: "ADD-MESSAGE"
    }as const
}
export const updateNewMessageActionCreator = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE",
        newMessage: newMessage
    }as const
}
export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case  "ADD-MESSAGE":
            const newMessage: MessagesType = {
                id: v1(),
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state

        case "UPDATE-NEW-MESSAGE":
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

