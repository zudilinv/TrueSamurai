import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogsType,
    MessagesType,
} from "../../Redux/dialogs-reducer";

type ElementType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageText: string
    addMessage: () => void
    sendMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void

}
export const Dialogs = (props: ElementType) => {
    let dialogsElements = [
        props.dialogs.map(d => (<DialogsItem name={d.name} id={d.id}/>))
    ]
    let dialogsMessages = [
        props.messages.map(m => (<Message message={m.message}/>))
    ]
    const addMessageHandler = () => {
        props.addMessage()
    }
    const sendMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.sendMessage(e)
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