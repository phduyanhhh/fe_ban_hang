import { LOGIN, LOGOUT } from '../actions/userAction.jsx';

const INITAL_STATE = {
    first_name: '',
    last_name: '',
    access_token: '',
    isAuthentication: false 
};

const userReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            console.log(">>> payload:", action.payload);
            return {
                ...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                access_token: action.payload.access_token,
                isAuthentication: true
            };
        case LOGOUT: 
            return {
                ...state,
                first_name: "",
                last_name: "",
                access_token: "",
                isAuthentication: false
            }
        default: return state;
    }
}

export default userReducer;