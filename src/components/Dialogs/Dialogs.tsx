import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string,
    id: string
}
const DialogItem = (props:DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
 return (
     <div className={s.dialog + " " + s.active}>
         <NavLink to={path}>{props.name}</NavLink>
     </div>
 )
}

type MessagePropsType = {
    message: string
}

const Message = (props:MessagePropsType) => {
   return (
       <div className={s.message}>{props.message}</div>
   )
}
const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Vitaly" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Viktor" id="4"/>
                <DialogItem name="Valera" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is your it-kamasutra"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
};

export default Dialogs;