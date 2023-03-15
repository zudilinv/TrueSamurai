import React from "react";
import "./App.css";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Route} from "react-router-dom"
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="main">
                <Route  path="/profile" render={() => <Profile/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
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