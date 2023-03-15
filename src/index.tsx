import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./Redux/redux-store";
import {Provider} from "react-redux";


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById("root")
    );


// const rerenderEntireTree = (state: AppStateType) => {
// rerenderEntireTree(store.getState());
//  store.subscribe(()=> {
//      let state = store.getState()
//     rerenderEntireTree(state)
//  })

// store.subscriber(rerenderEntireTree);
// state={store._state}
// addPost={store.addPost}
// updateNewPost={store.updateNewPost}
// addMessage={store.addMessage}
// updateNewMessage={store.updateNewMessage}