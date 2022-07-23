const initialState = {
    error:null,
    token:null,
    success:false
}

const authReducer = (state = initialState, action)=>{
    switch (action.type){
        case "LOGIN_ERROR":
            return{
                ...state,
                error:action.err
            }

        case "LOGIN_SUCCESS":
            return{
                ...state,
                token:action.authtoken,
                success:true,
                error:null
            }

        case "LOGOUT":
            return{
                ...state,
                token:null,
                success:false
            }

        default:
            return state
    }
}

export default authReducer