const initialState = {
  show: false,
  content: null,
  title: '',
  className: '',
  resolver: null,
}

const modal = (modal = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return Object.assign({}, modal, action.data)
    case 'CLOSE_MODAL':
      return Object.assign({}, modal, {
       show: false,
      })
    default:
      return modal
  }
}

export default modal