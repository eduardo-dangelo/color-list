const ADD_COLOR = 'ADD_COLOR'

const initialValues = {
  colors: ['#ffb12c', '#55b15b']
}

export function reducer(state = initialValues, action) {
  switch (action.type){
    case ADD_COLOR:
      return {
        ...state,
        colors: [ ...state.colors, action.payload]
      }
    default:
      return state
  }
}

const addColor = (color) => ({ type: ADD_COLOR, payload: color })

export const actions = {
  addColor
}