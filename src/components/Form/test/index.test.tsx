import { render, screen } from "@testing-library/react"
import { Form } from "../index"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"

test("render form", () => {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store = mockStore(initialState)
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  )

  const username = screen.getByTestId("username-input")
  const description = screen.getByTestId("body-input")
  const submitButton = screen.getByTestId("submit-button")

  expect(username).toBeInTheDocument()
  expect(description).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()
})

describe("Form", () => {
  const initialState = { output: 10 }
  const mockStore = configureStore()
  it("should render", () => {
    let store = mockStore(initialState)
    const { asFragment } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
