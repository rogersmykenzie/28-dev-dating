//initial state
const initialState = {
  email: ""
};

//constants
const UPDATE_EMAIL = "UPDATE_EMAIL";

//action creators
export function updateEmail(newEmail) {
  return {
    type: UPDATE_EMAIL,
    payload: newEmail
  };
}

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
}
