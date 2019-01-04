let bool = localStorage.getItem('islogin') ? true : false;

export default function cityName (state={islogin: bool}, action) {
  switch (action.type) {
    case 'SET_LOGIN' :
      return Object.assign({}, state, {
        islogin: action.name
      })
    default:
      return state
  }
}