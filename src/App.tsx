import React from "react";
import "./App.css";
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Route} from "react-router-dom"
import {StoreType} from "./Redax/store";



export type AppsType = {
    store: StoreType
}

const App: React.FC<AppsType> = (props) => {
    const state = props.store.getState()
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="main">
                <Route  path="/profile" render={() => <Profile posts={state.profilesPage.posts}
                                                              newPostText={state.profilesPage.newPostText}
                                                              dispatch={props.store.dispatch.bind(props.store)}

                                                             />}/>
                <Route path="/dialogs" render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                              messages={state.dialogsPage.messages}
                                                              newMessageText={state.dialogsPage.newMessageText}
                                                              dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
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