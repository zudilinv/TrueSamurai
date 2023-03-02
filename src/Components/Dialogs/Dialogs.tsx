import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType,
    DialogsType,
    MessagesType,
} from "../../Redax/store";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redax/dialogs-reducer";


export type ElementType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageText: string
    dispatch: (action: ActionType) => void
}
export const Dialogs = (props: ElementType) => {

    let dialogsElements = [
        props.dialogs.map(d => (<DialogsItem name={d.name} id={d.id}/>))
    ]
    let dialogsMessages = [
        props.messages.map(m => (<Message message={m.message}/>))
    ]

    // const newDialogElement = React.createRef<HTMLTextAreaElement>()
    // const sendMessageHandler = () => {
    //     const dialog = newDialogElement.current?.value
    //     alert(dialog)
    // }   //   <textarea>ref={newDialogElement}

    // const addMessageHandler = () => {
    //     props.dispatch({type: "ADD-MESSAGE"})
    // }
    // const sendMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.dispatch({type: "UPDATE-NEW-MESSAGE", newMessage: e.currentTarget.value})
    // }
    const addMessageHandler = () => {
        props.dispatch(addMessageActionCreator())
    }
    const sendMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <div>
                    <textarea value={props.newMessageText} onChange={sendMessageHandler}></textarea>
                    <button onClick={addMessageHandler}>Send</button>
                </div>

            </div>
            <div className={s.messages}>
                {dialogsMessages}
            </div>
        </div>
    )
}