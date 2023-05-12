import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPopularState } from "../../Types";




interface IPopular {
    users: IPopularState[],
    loading: boolean,
    error: string,
    click: number,
    page: number,

}

const initialState: IPopular = {
    users: [],
    loading: false,
    error: "",
    click: 1,
    page: 1,
   
}

 export const PopularSlice = createSlice({
    name: "popular",
    initialState,
    reducers: {
        getActors(state) {
             state.loading = true
        },
        getActorsSuccess(state,  action:PayloadAction<IPopularState[]>) {
            state.loading = true
            state.users = action.payload
            state.error = ""
        },
        getActorsError(state,action: PayloadAction<IPopularState[]>){
            state.error = "error"
        },
        getClickSlice(state, action) {
           state.click =+ action.payload
        },
       
       
    },
  


})
export const {getActors, getActorsError,getActorsSuccess, getClickSlice, } = PopularSlice.actions
export default PopularSlice.reducer