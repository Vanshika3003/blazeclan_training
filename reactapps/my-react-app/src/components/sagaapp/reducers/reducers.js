// create a reducers function, that will listen to actions dispatched from
// UI as well as from the SAGA Middleware

const reducers = (state = [], action) => {
    console.log("state", action.isLoggedIn);
    const check = action.isLoggedIn;
    switch (action.type) {
        case "GET_DEPARTMENTS":
            return { ...state, message: "Get Department call is initiated" };
        case "GET_DEPARTMENTS_SUCCESS":
            return {
                ...state,
                departments: action.departments,
                message: action.message,
            };
        case "ADD_DEPARTMENT":
            return { ...state, message: "Add Department is initiated" };
        case "ADD_DEPARTMENT_SUCCESS":
            return { ...state, department: action.department, message: "Add Department is Successful" };
        case "LOGIN":
            return { ...state, message: "Login is initiated" };
        case "LOGIN_SUCCESS":
            return { ...state, user: action.user, message: "Login is Successful" };
        default:
            return state;
    }
};

export default reducers;