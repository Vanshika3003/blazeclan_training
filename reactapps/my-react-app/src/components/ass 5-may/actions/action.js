export const getDepartments = () => {
    return {
        type: 'GET_DEPARTMENTS'
    };
};

export const addDepartment = (dept) => {
    console.log('Add Department is dispatched');
    return {
        type: 'ADD_DEPARTMENT',
        dept
    };
}
export const login = (user) => {
    console.log('Login Details are dispatched');
    return {
        type: 'LOGIN',
        user
    };
}