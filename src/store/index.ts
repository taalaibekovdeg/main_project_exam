
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PopularSlice from "./Reducers/PopularSlice";
import TopRatedSlice from "./Reducers/TopRatedSlice";
import SearchSlice from "./Reducers/SearchSlice";
import DetailSlice from "./Reducers/DetailSlice";
import FavoriteSlice from "./Reducers/FavoriteSlice";
const rootState = combineReducers({
    PopularSlice,
    TopRatedSlice,
    SearchSlice,
    DetailSlice,
    FavoriteSlice

})

export const setUpStore = () => {
    return configureStore({
        reducer: rootState,
    })
}

export type  rootState = ReturnType<typeof rootState> 
type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore["dispatch"]