import React, {useEffect} from 'react';
import { useAppSelector } from '../Hooks/useAppSelector';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../Hooks/useAppDispatch';
import { getSearchSlice } from '../../store/Reducers/ActionCreators';
import Card from '../Card';

const SearchResult = () => {

const {search} = useAppSelector((state) => state.SearchSlice)
const dispatch = useAppDispatch()
const {movieName} = useParams()


useEffect(() => {
     dispatch(getSearchSlice(movieName))
}, [movieName]) 

console.log(search)

    return (     
        <div id='search'>
             <div className="containers">
                {
                    search.length ? 
                    <div className="search">
                    {
                        search.map(el => (
                            <Card el={el}/>
                        ))
                    }
                </div>
                :
                <div className='error'>
                    <h1>Фильм который вы искали не найдено</h1>
                </div>
                }
             </div>
        </div>
    );
};

export default SearchResult;