const initialState = {
  messages: [],
  loading: false,
}

export const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "MESSAGES_LOADED":
      return {
        ...state,
        messages: action.payload,
        loading: false,
      }
    case "SUBMIT":
      return {
        ...state,
        username: action.payload.username,
        body: action.payload.body,
      }
    case "LOADING_MESSAGES":
      return { ...state, loading: true }
    default:
      return state
  }
}
