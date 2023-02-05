const initialState = {
    email: 'frodriguesbetim@gmail.com',
    pass: '',
};

const authReducer = (state = initialState, action) => {
   
    if (action.type === 'changeEmail'){
        return {...state, email:action.payload.email};
    }

    // if (action.type === 'changePassword'){
    //     return {...state, pass:action.payload.pass};
    // }

    return state;
};

export default authReducer;