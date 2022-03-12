import { css } from "@emotion/css"
import { LayoutProps } from "../../types/types"

function Header(props: LayoutProps) {
  const { children } = props
  return <div className={styles.header}>{children}</div>
}

const styles = {
  header: css`
    width: 100%;
    display: flex;
    height: 50px;
    padding: 4px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: calc(16px + 2vmin);
    background-color: var(--header);
  `,
}

export default Header