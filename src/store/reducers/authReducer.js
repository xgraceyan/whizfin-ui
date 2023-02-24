const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
