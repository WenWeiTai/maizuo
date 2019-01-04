
export default function cityName (state=[], action) {
  switch (action.type) {
    case 'SET_ADD' :
      return [...state, action.obj]
    default:
      return state
  }
}