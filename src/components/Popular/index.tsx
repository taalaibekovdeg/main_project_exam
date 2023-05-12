import React, {useEffect} from 'react';
import { useAppSelector } from '../Hooks/useAppSelector';
import { useAppDispatch } from '../Hooks/useAppDispatch';
import { getPopular } from '../../store/Reducers/ActionCreators';
import Card from '../Card';
import Slider from 'react-slick';


const Popular = () => {

    const dispatch = useAppDispatch()
     const {users,loading,error} = useAppSelector(s => s.PopularSlice);
     const { lang} = useAppSelector(s => s.SearchSlice);

     useEffect(() => {
         dispatch(getPopular(lang))
     }, [])

     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    return (
       <div>
         <div className='containers '>
            <div className='flex items-center overflow-x-auto'>
           
           {
                users.map(el => (
                    <Card el={el}/>
                ))
            }
           
          
            </div>
           
           
        </div>
       </div>
       
    );
};

export default Popular;