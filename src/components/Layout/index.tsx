import { css } from "@emotion/css"
import { LayoutProps } from "../../types/types"
import Header from "../Header"

function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <div className={styles.container}>
      <Header>
        <h1>hi
        </h1>
      </Header>
      <div className={styles.root}>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    margin: 0 auto;
    max-width: 1920px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
  `,
  root: css`
    display: flex;
    height: 100%;
    width: 100%;
  `,
  content: css`
    width: 100%;
    height: 100%;
  `,
}

export default Layout