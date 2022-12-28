import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}><NavLink to="/Profile" activeClassName={s.active}>Profiles</NavLink></div>
        <div className={s.item}><NavLink to="/Dialogs" activeClassName={s.active}>Messages</NavLink></div>
        <div className={s.item}><NavLink to="/News" activeClassName={s.active}>News</NavLink></div>
        <div className={s.item}><NavLink to="/Music" activeClassName={s.active}>Music</NavLink></div>
        <div className={s.item}><NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink></div>
    </nav>
}