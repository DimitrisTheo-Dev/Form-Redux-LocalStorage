export const fetchMessages = (
  dispatch: (arg0: { type: string; payload?: any }) => void
) => {
  dispatch({ type: "LOADING_MESSAGES" })
  const messages = JSON.parse(localStorage.getItem("messages") || "[]")
  const slicedArray = messages
    .slice(messages.length - 10, messages.length)
    .reverse()
  dispatch({
    type: "MESSAGES_LOADED",
    payload: slicedArray || [],
  })
}

export const submitValues = (value: any) => ({
  type: "SUBMIT",
  payload: value || {},
})
