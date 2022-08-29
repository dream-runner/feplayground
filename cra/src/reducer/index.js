const initState = {
  storeCnt: 10
}
export default (state = initState, action) => {
  const { type, payload = 1 } = action
  switch (type) {
    case 'increase':
      return {
        storeCnt: state.storeCnt + payload
      }
      break
    default: 
      return state
  }
}