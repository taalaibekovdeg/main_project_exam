import { createSlice } from "@reduxjs/toolkit"
import { IPopularState } from "../../Types";

interface IFavorite {
    favorite: IPopularState[];
}

const initialState: IFavorite = {
    favorite: []
}

export const FavoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        FetchFavorite(state, action) {
            const found = state.favorite.find(el => el.id === action.payload.id);
            if(!found) {
                return {...state,favorite: [...state.favorite, action.payload]};
            }else {
                return {...state, favorite: state.favorite.filter(el => el.id !== action.payload.id)};
            }
        }
    }
})

export const {FetchFavorite} = FavoriteSlice.actions;

export default FavoriteSlice.reducer