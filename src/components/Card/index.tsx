import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom"
import {AiFillHeart} from "react-icons/ai"
import { useAppSelector } from '../Hooks/useAppSelector';
import { useAppDispatch } from '../Hooks/useAppDispatch';
import { getFavorite } from '../../store/Reducers/ActionCreators';
interface IPop {
    el: {
        id: number;
        title: string;
        name: string;
        poster_path: string;
        total_pages: number;
        vote_average: any
    }
}

const Card = ({el}: IPop) => {
    const dispatch = useAppDispatch()
    const {favorite} = useAppSelector(s => s.FavoriteSlice)
     
     console.log(favorite)
     const found = favorite.some(e => e.id === el.id)
 
     useEffect(() => {
         dispatch(getFavorite(el))
         
     }, [])

    return (

        <div className=''>
            
                
               

            <div className='w-[210px]  h-[450px]  relative z-1'>
                <NavLink to={`/detailPage/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""  className='rounded-[20px] w-[200px]'/>
                </NavLink>
            <div className='flex'>
            <div className="w-[50px] h-[50px] rounded-[50%] absolute mt-[-25px]   ml-[20px]" style={{
                                    background: `conic-gradient(yellow,${Math.round(el.vote_average * 10) * 3.59}deg,gray 0deg)`

                                }}>
                                    <h3 style={{color: "white"}}>{Math.round(el.vote_average * 10)}%</h3>

                                </div>
            <button onClick={() => dispatch(getFavorite(el))}  className='p-1 bg-yellow-500 text-[22px] rounded-[5px] absolute mt-[-5px] ml-[140px]'
            style={{color: found ? "red": ""}}
            ><AiFillHeart/></button>
            </div>
            
                                <h5 className='mt-[25px]'>{el.title}</h5>
                                
            </div>
           
            
            
                
            
            </div>
            
        
    );
};

export default Card;