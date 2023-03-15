import React, {ChangeEvent} from "react";
import {
    addMessageActionCreator, DialogsType, MessagesType,
    updateNewMessageActionCreator
} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageText: string,
}
type MapDispatchPropsType = {
    addMessage: () => void,
    sendMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        sendMessage: (e: ChangeEvent<HTMLTextAreaElement>) =>
            dispatch(updateNewMessageActionCreator(e.currentTarget.value)),

    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)