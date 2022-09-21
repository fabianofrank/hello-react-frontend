// Action
const GET_MESSAGE = 'greeting/message';

// Action Creator
export function getMessage(message) {
  return {
    type: GET_MESSAGE,
    payload: message,
  };
}

// Reducer
export default function greetingsReducer(state = [], action) {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}
