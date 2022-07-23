import authReducer from "./AuthReducer";
import NoteReducer from "./Notereducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    auth: authReducer,
    NoteReducer: NoteReducer
})

export default RootReducer