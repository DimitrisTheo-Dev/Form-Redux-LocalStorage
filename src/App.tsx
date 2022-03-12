import React from "react"
import { Form } from "./components/Form"
import Layout from "./components/Layout"
import { css } from "@emotion/css"
import { AllMessages } from "./components/AllMessages"

function App() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.formContainer}>
            <Form />
          </div>
          <div className={styles.allMessagesContainer}>
            <AllMessages />
          </div>
        </div>
      </div>
    </Layout>
  )
}

const styles = {
  container: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  formContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  allMessagesContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  section: css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
    margin: 32px auto;
    padding: 16px;

    &:before {
      content: "";
      align-self: stretch;
    }

    @media (max-width: 1280px) {
      flex-direction: column;
      align-items: center;
    }
  `,
}
export default App
