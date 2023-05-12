import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../Hooks/useAppSelector';
import { useAppDispatch } from '../Hooks/useAppDispatch';
import { getDetail, getFavorite } from '../../store/Reducers/ActionCreators';




const DetailPage = () => {
    const {movieId} = useParams()
    const dispatch = useAppDispatch()
    
    const {user,lang} = useAppSelector((state) => state.DetailSlice)
     
 
     useEffect(() => {
         dispatch(getDetail(movieId, lang))
         dispatch(getFavorite(user))
         
     }, [movieId, lang])
     
    

  
  

    return (
        <>
        {/* <div id='detailPage' style={{
            background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${user.backdrop_path}")`,
                filter: "grayscale(0%)",
               
                
        }}> 
        <div className='containers py-[50px]'>
             <div className='flex items-center'>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${user.poster_path}`} alt="" />
                 <div className='detailPage--text'>
                      <h3>{user.title}</h3>
                      <div style={{
                                display: "flex",
                                alignItems: "center"
                            } }>
                                <h4 style={{width: "140px"}}>{user.release_date}</h4>
                                <p style={{margin: "0 10px"}}>{Math.floor(user.runtime / 60)}hour {user.runtime % 60}minute</p>

                      </div>
                            <div className="">
                              
                                
                                
 

                                
                            </div>
                            <p>{user.overview}</p>
                           
                           
                 </div>
             </div>
        </div>
         
        </div> */}
        </>
    );
};

export default DetailPage;