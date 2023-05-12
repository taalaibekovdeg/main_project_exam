import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPopularState } from "../../Types";


interface ITop {
    users: IPopularState[],
    loading: boolean,
    error: string,
   
 
}

const initialState : ITop = {
    users: [],
    loading: false,
    error: "",
    
  
}


export const TopRatedSlice = createSlice({
    name: "topRated",
    initialState,
    reducers: {
       TopRatedActors(state) {
        state.loading = true;
       },
       TopRatedSuccess(state, action: PayloadAction<IPopularState[]>){
        state.loading = true
        state.users = action.payload
        state.error = ""
       },
       TopRatedError(state, action: PayloadAction<IPopularState[]>){
        state.error = "error"
       },
     
  
  
}
})

export const {TopRatedActors,TopRatedSuccess, TopRatedError} = TopRatedSlice.actions

export default TopRatedSlice.reducer