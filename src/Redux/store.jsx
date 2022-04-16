import {createStore, applyMiddleware, compose} from "redux"
import cityCountryReducer from "../cityCountry/reducer"
import thunk from "redux-thunk"
import {combineReducers} from "redux"

const reducer = combineReducers({
    cityCounrty:cityCountryReducer
})
const composeEnhancer = ((process.env.NODE_ENV !== "production" && eindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose)

export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))