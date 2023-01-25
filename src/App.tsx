import React from "react";
import "./App.css";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Route} from "react-router-dom";
import {RootStateType} from "./Redax/state";
import {Friends} from "./Components/Friends/Friends";


export type AppsType = {
    state: RootStateType
}

function App(props: AppsType) {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="main">
                <Route path="/profile" render={() => <Profile posts={props.state.profilesPage.posts}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                              messages={props.state.dialogsPage.messages}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/friends" component={Friends}/>
            </div>
        </div>
    )
}

export default App;



