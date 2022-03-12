import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { css } from "@emotion/css"
import { Message } from "../Message"
import { MessagesFallback } from "../MessagesFallback"
import { fetchMessages } from "../../actions"

export function AllMessages() {
  const dispatch = useDispatch()
  const messages = useSelector((state: any) => state.messages)
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchMessages)
    }, 1000)
    return () => clearInterval(interval)
  }, [dispatch])

  const loadingMessages = useSelector(
    (state: { messages: { loading: any } }) => state.messages.loading
  )
  const latestMessages = messages?.messages
  return (
    <div className={styles.container}>
      <div className={styles.scrollbar}>
        {!loadingMessages ? (
          latestMessages.length ? (
            latestMessages.map((message: any, idx: number) => (
              <Message key={idx} message={message} />
            ))
          ) : (
            <Message message={{ body: "No messages" }} />
          )
        ) : (
          <MessagesFallback />
        )}
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
