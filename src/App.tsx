import React from "react";
import "./App.css";
import {Navbar} from "./Components/Navbar/Navbar";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Route} from "react-router-dom"
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersFunctionContainer} from "./Components/Users/UsersFunctionContainer";
import {UsersContainerClass} from "./Components/Users/UsersContainerClass";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
//import ProfileContainerClass from "./Components/Profile/ProfileContainerClass";


const App = () => {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="main">

                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/users" render={() => <UsersFunctionContainer/>}/>
                <Route path="/usersC" render={() => <UsersContainerClass/>}/>
            </div>
        </div>
    )
}
export default App;

// state: RootStateType
// addPost: () => void
//     updateNewPost: (newText: string) => void
//     addMessage: () => void
//     updateNewMessage: (newMessage: string) => void

// addPost={props.store.addPost.bind(props.store)}
// updateNewPost={props.store.updateNewPost.bind(props.store)}
// addMessage={props.store.addMessage.bind(props.store)}
// updateNewMessage={props.store.updateNewMessage.bind(props.store)}