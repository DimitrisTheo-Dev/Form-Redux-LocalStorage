import { css, cx } from "@emotion/css"

export function MessagesFallback() {
  return (
    <>
      <div className={styles.message}>
        <span className={cx(styles.username, "skeleton")} />
        <p className={cx(styles.messageText, "skeleton")} />
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
    font-size: 1.5rem;
    border-radius: 5px;
    padding: 25px;
    background-color: var(--messageBackground);
    border: 1px solid var(--header);
  `,
  username: css`
    display: flex;
    @media (max-width: 1280px) {
      width: 250px;
    }
    width: 400px;
    height: 35px;
    border-radius: 5px;
    &.skeleton {
      opacity: 0.7;
      animation: skeleton-loading 1s linear infinite alternate;
    }

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 70%);
      }

      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  `,
  messageText: css`
    display: flex;
    @media (max-width: 1280px) {
      width: 250px;
    }
    width: 400px;
    height: 125px;
    &.skeleton {
      opacity: 0.7;
      animation: skeleton-loading 1s linear infinite alternate;
    }

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 70%);
      }

      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  `,
}
