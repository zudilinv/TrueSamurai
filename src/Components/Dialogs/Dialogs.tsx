import React from "react";
import s from "./Dialogs.module.css";
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../Redax/state";


export type ElementType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
}
export const Dialogs = (props: ElementType) => {

    let dialogsElements = [
        props.dialogs.map(dialog => (<DialogsItem name={dialog.name} id={dialog.id}/>))
    ]
    let dialogsMessages = [
        props.messages.map(m => (<Message message={m.message}/>))
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {dialogsMessages}

            </div>
        </div>
    )
}