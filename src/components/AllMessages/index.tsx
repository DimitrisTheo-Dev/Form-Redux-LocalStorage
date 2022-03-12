import { useEffect } from "react"
import { fetchMessages } from "../../index"
import { useDispatch, useSelector } from "react-redux"
import { css } from "@emotion/css"

export function AllMessages() {
  const dispatch = useDispatch()
  const messages = useSelector((state: any) => state.messages)
  useEffect(() => {
    dispatch(fetchMessages)
  }, [dispatch])
  return (
    <div className={styles.container}>
      {messages?.messages.map((message: any, idx: number) => (
        <div className={styles.message} key={idx}>
            <span className={styles.username}> {message.username}</span>
          <p className={styles.messageText}>{message.body}</p>
        </div>
      ))}
    </div>
  )
}

const styles = {
  container: css`
    display: flex;
  `,
  message: css`
    font-size: 1.5rem;
  `,
  username: css`
    font-weight: bold;
  `,
  messageText: css`
    background-color: #f5f5f5;
  `,

}