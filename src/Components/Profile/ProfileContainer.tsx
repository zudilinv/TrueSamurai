import React, {useEffect} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router-dom";

type RouteParams = {
    userId: string
}

type ProfileContainerType = MapStatePropsType & MapDispatchPropsType
const ProfileContainer = (props: ProfileContainerType & RouteComponentProps<RouteParams>) => {

useEffect(()=> {
    let userId = props.match.params.userId
    // if (!userId) {
    //     return  userId = "2"
    // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                props.setUserProfile(response.data)
            })
},[]);

        return (
            <div>
                <Profile profile={props.profile}/>
            </div>
        );
    };


type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilesPage.profile
    }
}

let WithURLDataComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile}) (WithURLDataComponent)