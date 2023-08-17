export const initialState = {
  loading: false,
  dog: '',
  error: '',
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'Start':
      return { ...state, dog: '', error: '', loading: true }
    case 'Success':
      return { ...state, dog: action.payload, error: '', loading: false }
    case 'Fail':
      return { ...state, dog: '', error: action.payload, loading: false }
    default:
  }
}
