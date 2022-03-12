import { css } from "@emotion/css"

export function Message({ message }: any) {
  return (
    <>
      <div className={styles.message}>
        <span className={styles.username}>{message.username}</span>
        <p className={styles.messageText}>{message.body}</p>
      </div>
      <br />
    </>
  )
}

const styles = {
  message: css`
    width: 400px;
    @media (max-width: 1280px) {
      width: 250px;
    }
    background-color: var(--messageBackground);
    border: 1px solid var(--header);
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
}
