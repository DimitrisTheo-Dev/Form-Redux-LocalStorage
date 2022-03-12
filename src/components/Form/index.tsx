import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {

  submitValues,
} from "../../index"

export function Form() {
  const dispatch = useDispatch()
  const loadingMessages = useSelector((state: { messages: { loading: any; }; }) => state.messages.loading)
  const [messageValue, setMessageValue] = useState<any>({  })
  useEffect(() => {
    const messages = localStorage.getItem("messages")
    if (messages) {
      setMessageValue(JSON.parse(messages))
    }
  }, [])

  const previousMessages = JSON.parse(localStorage.getItem("messages") || "{}")
  console.log(previousMessages)



  const handleSubmit = () => {
    if(!messageValue) {
      console.error("empty message")
      return
    }
    if (!previousMessages.length) {
      localStorage.setItem("messages", JSON.stringify([messageValue]))
      dispatch(submitValues({ type: "SUBMIT", payload: { ...messageValue } } ))
      window.location.reload()
      return
    }

    dispatch(submitValues({ type: "SUBMIT", payload: { ...messageValue } } ))
    localStorage.setItem(
      "messages",
      JSON.stringify([...previousMessages, messageValue]),
    )
  }


  const handleUsernameChange = (e: { target: { value: any; }; }) => {
    setMessageValue({ username: e.target.value, body: messageValue.body })
  }
  const handleBodyChange = (e: { target: { value: any; }; }) => {
    setMessageValue({ username: messageValue.username, body: e.target.value })
  }
  if (loadingMessages) {
    return <p>loading...</p>;
  }

  return (
    <div >
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleUsernameChange}
      />
      <input
        type="text"
        name="body"
        placeholder="Message"
        onChange={handleBodyChange}
      />
      <div onClick={handleSubmit}>Send</div>
    </div>
  )

}