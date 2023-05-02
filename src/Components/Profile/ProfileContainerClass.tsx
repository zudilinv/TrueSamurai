import React from "react";
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

class ProfileContainerClass extends React.Component<ProfileContainerType & RouteComponentProps<RouteParams>> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
           return  userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)

            .then(response => {
                this.props.setUserProfile(response.data)
            })
    };
    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    };
}

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

let WithURLDataComponentClass = withRouter(ProfileContainerClass)
export default connect(mapStateToProps, {setUserProfile}) (WithURLDataComponentClass)