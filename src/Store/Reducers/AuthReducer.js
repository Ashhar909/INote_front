const initialState = {
    error:null,
    token:null,
    success:false
}

const authReducer = (state = initialState, action)=>{
    switch (action.type){
        case "LOGIN_ERROR":
            console.log(action.err)
            break

        case "LOGIN_SUCCESS":
            return{
                ...state,
                token:action.authtoken,
                success:true
            }

        default:
            return state
    }
    return state
}

export default authReducer