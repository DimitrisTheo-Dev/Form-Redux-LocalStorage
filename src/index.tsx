import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import { applyMiddleware, combineReducers, createStore } from "redux"

const initialState = {
  messages: [],
  loading: false,
}

const reducer = (state = initialState, action: { type: string; payload: any; }) => {
  console.log(action, "REDUCER 1")
  switch (action.type) {
    case "MESSAGES_LOADED":
      return {
        ...state,
        messages: action.payload,
        loading: false,
      }
    case "SUBMIT":
      return {
        ...state,
        username: action.payload.username,
        body: action.payload.body,
      }
    case "LOADING_TODOS":
      return { ...state, loading: true }

    default:
      return state
  }
}

// Sample action :
export const submitValues = (value: any) => ({ type: "SUBMIT", payload: value || {} })

export const fetchMessages = (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  dispatch({ type: "LOADING_MESSAGES" })
  const messages = JSON.parse(localStorage.getItem("messages") || "[]");
  setTimeout(() => {
    dispatch({
      type: "MESSAGES_LOADED",
      payload:  messages || [],
    })
  }, 1000)
}

const store = createStore(
  combineReducers({ messages: reducer }),
  applyMiddleware(reduxThunk),
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
