import React from "react";
import "./index.css";
import {store} from "./Redax/store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById("root")
    );
}

store.subscriber(rerenderEntireTree)
rerenderEntireTree();

// store.subscriber(rerenderEntireTree);
// state={store._state}
// addPost={store.addPost}
// updateNewPost={store.updateNewPost}
// addMessage={store.addMessage}
// updateNewMessage={store.updateNewMessage}