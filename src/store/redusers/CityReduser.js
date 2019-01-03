export default function cityName (state={}, action) {
  switch (action.type) {
    case 'SET_CURCITY' :
      return Object.assign({}, state, {
        curCity: action.name
      })
    default:
      return state
  }
}