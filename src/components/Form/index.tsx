import { css, cx } from "@emotion/css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { submitValues } from "../../actions"

export function Form() {
  const dispatch = useDispatch()

  const [messageValue, setMessageValue] = useState<any>({})

  const previousMessages = JSON.parse(localStorage.getItem("messages") || "{}")
  const handleSubmit = () => {
    if (!previousMessages.length) {
      localStorage.setItem("messages", JSON.stringify([messageValue]))
      dispatch(submitValues({ type: "SUBMIT", payload: { ...messageValue } }))
      setMessageValue({ username: "", body: "" })
      return
    }
    dispatch(submitValues({ type: "SUBMIT", payload: { ...messageValue } }))
    localStorage.setItem(
      "messages",
      JSON.stringify([...previousMessages, messageValue])
    )
    setMessageValue({ username: "", body: "" })
  }

  const handleUsernameChange = (e: { target: { value: any } }) => {
    setMessageValue({ username: e.target.value, body: messageValue.body })
  }
  const handleBodyChange = (e: { target: { value: any } }) => {
    setMessageValue({ username: messageValue.username, body: e.target.value })
  }
  const isNotValid = (field: { username?: any; body?: any }) => {
    if (
      field?.username?.trim() === "" ||
      !field?.username ||
      field?.body?.trim() === "" ||
      !field?.body ||
      Object.keys(field)?.length === 0
    ) {
      return true
    }
  }
  return (
    <form className={styles.container}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="field"
        value={messageValue.username || ""}
        onChange={handleUsernameChange}
      />
      <input
        type="text"
        name="body"
        placeholder="Message"
        className="body"
        value={messageValue.body || ""}
        onChange={handleBodyChange}
      />
      <button
        className={cx(
          styles.button,
          isNotValid(messageValue) ? "disabled" : ""
        )}
        onClick={handleSubmit}
        disabled={isNotValid(messageValue)}
        onKeyPress={(e) => e.key === "Enter" && handleSubmit}
        type="submit"
      >
        <span className={styles.buttonText}>Send</span>
      </button>
    </form>
  )
}

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;

    .field {
      width: 100%;
      height: 58px;
      border-radius: 4px;
      position: relative;
      background-color: rgba(255, 255, 255, 0.3);
      transition: 0.3s all;
      outline: none;
    }
    .body {
      height: 120px;
      background-color: rgba(255, 255, 255, 0.4);
      transition: 0.3s all;
      outline: none;
    }
    input[type="text"],
    select {
      transition: outline 0.6s linear;
      font-size: 18px;
      :hover {
        border: solid 1px var(--header);
      }
      width: 400px;
      @media (max-width: 1280px) {
        width: 300px;
      }
      padding: 22px 25px;
      margin: 8px 10px;
      display: inline-block;
      border: 1px solid var(--lightgray);
      border-radius: 4px;
      box-sizing: border-box;
    }
  `,
  button: css`
    @media (max-width: 1280px) {
      width: 300px;
    }
    width: 400px;
    height: 56px;
    cursor: pointer;
    border-radius: 4px;
    position: relative;
    border: 1px solid var(--header);
    background-color: rgba(255, 255, 255, 0.3);
    transition: 0.3s all;
    &.disabled {
      pointer-events: none;
      border: 1px solid var(--lightgray);
      opacity: 0.5;
    }
    &:hover {
      background-color: var(--header);
      span:nth-child(1) {
        color: var(--white);
      }
    }
  `,
  buttonText: css`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 56px;
  `,
}
