import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string,
    isAuth: boolean
}

export const Header = (props: HeaderPropsType) => {

    return <header className={s.header}>
        <img
            src="https://png.pngtree.com/template/20191024/ourmid/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-image_323034.jpg" />
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>

}