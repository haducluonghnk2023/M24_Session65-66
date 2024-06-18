import { combineReducers, createStore } from "redux";
import reducerProfile from "./reducers/profileReducer";
import reducerUser from "./reducers/listUser";
import reducerProduct from "./reducers/listProduct";
import reducerCounter from "./reducers/counter";
import { randomNumberReducer } from "./reducers/randomNumber";
import { companyReducer } from "./reducers/companyReducer";
import { themeReducer } from "./reducers/themReducer";


const rootReducer = combineReducers({
    reducerProfile,reducerUser,reducerProduct,reducerCounter,randomNumberReducer,companyReducer,themeReducer
 
}); 
const store = createStore(rootReducer);

export default store;
