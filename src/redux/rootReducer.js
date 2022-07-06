import { combineReducers } from "redux";//sranov menq miacnum enq
import { likesReducer } from "./about/reducer";
import contactReducer from "./contact/contact.reducer";
//bolor redyusernery mer komponentneri:






const rootReducer = combineReducers({
    contact:contactReducer,
    text: likesReducer,
    likes: likesReducer,
    comments: likesReducer,
    likesReducer
})

export default rootReducer