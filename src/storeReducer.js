import rootReducer from "./components/reducer/combineReducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({reducer : rootReducer})

export default store