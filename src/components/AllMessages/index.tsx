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
      <div className={styles.scrollbar}>
        {messages?.messages.map((message: any, idx: number) => (
          <>
            <div className={styles.message} key={idx}>
              <span key={idx + "_username"} className={styles.username}>
                {message.username}
              </span>
              <p key={idx + "_body"} className={styles.messageText}>
                {message.body}
              </p>
            </div>
            <br />
          </>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    max-height: 800px;
    width: 500px;
    @media (max-width: 1280px) {
      width: auto;
    }
    overflow: hidden;
  `,
  message: css`
    width: 400px;
    @media (max-width: 1280px) {
      width: 250px;
    }
    background-color: var(--lightgray);
    font-size: 1.5rem;
    border-radius: 5px;
    padding: 25px;
  `,
  username: css`
    font-weight: bold;
  `,
  messageText: css`
    font-weight: normal;
    font-size: 1.2rem;
  `,
  scrollbar: css`
    border: 1px solid var(--lightgray);
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 10px;
    ::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background: var(--tooltip-track);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--lightgray);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--gray);
      border-radius: 10px;
    }
  `,
}
