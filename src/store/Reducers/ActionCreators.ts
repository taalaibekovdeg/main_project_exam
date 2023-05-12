import axios from "axios"
import { getActors, getActorsError, getActorsSuccess } from "./PopularSlice"
import { AppDispatch } from ".."
import { APIKEY } from "../../components/ApiKey"
import { TopRatedActors, TopRatedError, TopRatedSuccess } from "./TopRatedSlice"
import { SearchError, SearchLoader, SearchSuccess, getlanguage } from "./SearchSlice"
import { getDetailError, getDetailFilm, getDetailSuccess } from "./DetailSlice"
import { FetchFavorite } from "./FavoriteSlice"

export const getPopular = (lang: any) => {
    return async (dispatch: AppDispatch) => {
        try{
            dispatch(getActors())
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}&page=1`)
            dispatch(getActorsSuccess(response.data.results))

        }catch (e: any) {
            dispatch(getActorsError(e.message))
        }
    }
}

export const getTopRated = (lang: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(TopRatedActors())
            const response = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${lang}&page=1`)
            dispatch(TopRatedSuccess(response.data.results));
        }catch(e: any) {
            dispatch(TopRatedError(e.message))
        }
    }
}

export const getSearchSlice  = (movieName: any) =>  async (dispatch: AppDispatch) => {
    try {
      dispatch(SearchLoader())
      const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${movieName}&language=es-US
      `)
      dispatch(SearchSuccess(res.data.results))
    }catch (e:any) {
           dispatch(SearchError(e.message))
    }
}

export const LanguageContext = (lan: string) => (dispatch: AppDispatch) => {
    dispatch(getlanguage(lan))
}

export const getDetail = (id: any, lang: string) => {
    return async (dispatch: AppDispatch) => {
        try{
            dispatch(getDetailFilm(id))
               const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=${lang}&`)
               dispatch(getDetailSuccess(response.data))
        }catch(e: any){
            dispatch(getDetailError(e.message))
        }
    }
}

export const getFavorite = (el: any) => (dispatch: AppDispatch) => {
    dispatch(FetchFavorite(el))
}