import React, {useEffect} from "react";
import {Header} from "./Header";
import s from "./Header.module.css"
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {AuthType, setAuthUserData} from "../../Redux/auth-reducer";

export type HeaderContainerType = MapStatePropsType & MapDispatchPropsType
const HeaderContainer = (props: HeaderContainerType) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.setAuthUserData(response.data.data.login)
                    // let {id, login, email} = response.data.data
                    // props.setAuthUserData(login)
                }
            })
    }, []);

    return (
        <div className={s.header}>
            <Header isAuth={props.isAuth} login={props.login}/>
        </div>
    )
}
type MapStatePropsType = {
    login: string,
    isAuth: boolean
}
type MapDispatchPropsType = {
    setAuthUserData: (data: AuthType) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)