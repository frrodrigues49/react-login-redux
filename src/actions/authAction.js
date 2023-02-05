// export const checkLogin = () => {
//     return (dispatch) => {
       
//     }
// }



export const changeEmail = (email) => {
    return {
        type: 'changeEmail',
        payload: {
            email
        }
    };
};

export const changePassword = (pass) => {
    return {
        type: 'changePassword',
        payload: {
            pass
        }
    };
};