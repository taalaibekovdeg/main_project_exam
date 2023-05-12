import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import { IPopularState } from "../../Types"

interface ISearchSlice {
    search: IPopularState[],
    loader: boolean,
    error: string,
    lang: string,
    dark: boolean,
}
const initialState: ISearchSlice = {
    search: [],
    loader: false,
    error: "",
    lang: "en-US",
    dark: false
}

export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
       SearchLoader(state) {
          state.loader = true
       },
       SearchSuccess(state,action: PayloadAction< IPopularState[]>) {
        state.loader = false
        state.error = ''
        state.search = action.payload
       },
       SearchError(state, action) {
         state.error = action.payload
         state.loader = false
         state.search = []
       },
       getlanguage(state, action:PayloadAction<string>) {
        state.lang = action.payload
    },
    getDark(state) {
        state.dark = !state.dark
    }
    }
})

export const {SearchLoader, SearchSuccess, SearchError, getlanguage, getDark} = SearchSlice.actions 
export default SearchSlice.reducer