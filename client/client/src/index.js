import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
// import Reducer, { AddSong } from "./redux/actions";
// import  { configureStore } from "@reduxjs/toolkit";


// const redux=require('redux')
// const createStore=redux.configureStore;
const root = ReactDOM.createRoot(document.getElementById("root"));
// const store=createStore(Reducer)
// console.log('initial state',store.getState())
// const unsubscribe=store.subscribe(()=>console.log('Updated state',store.getState()))
// store.dispatch(AddSong('ADD_SONG',{
//   Title: "Title",
//   Artist: "Artist",
//   Album: "Album",
//   Genere: "Genere",
// }))
root.render(
  <React.StrictMode>
    <MantineProvider>
      <ModalsProvider labels={{ confirm: 'Delete Song', cancel: "No don't delete it" }}>
        <App />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
