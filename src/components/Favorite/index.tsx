import React from 'react';
import { useAppSelector } from '../Hooks/useAppSelector';
import Card from '../Card';

const Favorite = () => {
    const {favorite} = useAppSelector(s => s.FavoriteSlice)
    return (
        <div className='containers'>
            <div className='flex items-center overflow-x-auto'>
            {
               favorite.map(el => (
                <Card el={el}/>
               ))
            }
            </div>
            
        </div>
    );
};

export default Favorite;