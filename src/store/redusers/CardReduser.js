let shopCard = localStorage.getItem('shopCard') ? JSON.parse(localStorage.getItem('shopCard')) : []

export default function cityName (state=shopCard, action) {
  switch (action.type) {
    case 'SET_ADD' :

    // 判断传入的影片id是否存在
    // var index = -1;
    // var filmId = action.obj.id
    // var hasId = state.some((item, i) => {
    //   if (filmId === item.id) {
    //     index = i
    //     return true
    //   } else {
    //     return false
    //   }
    // })
    // console.log(hasId, index, action.obj)

    // if (!hasId) {
    //   var obj = {
    //     filmId: action.obj.id,
    //     filmName: action.obj.name,
    //     filmPrice: parseInt(30 + Math.random() * 60),
    //     filmNum: 1
    //   }
    //   return [action.obj]
    // }

    // if (hasId) {
    //   state[index].filmNum++
    // } else {
    //   console.log(state)
    //   var obj = {
    //     filmId: action.obj.id,
    //     filmName: action.obj.name,
    //     filmPrice: parseInt(30 + Math.random() * 60),
    //     filmNum: 1
    //   }

    // }
    //   console.log(state)
      localStorage.setItem('shopCard', JSON.stringify(action.obj))
      return action.obj
    default:
      return state
  }
}