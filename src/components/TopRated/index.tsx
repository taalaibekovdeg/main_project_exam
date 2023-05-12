import React, {useEffect} from 'react';
import { useAppDispatch } from '../Hooks/useAppDispatch';
import { useAppSelector } from '../Hooks/useAppSelector';
import { getTopRated } from '../../store/Reducers/ActionCreators';
import Card from '../Card';

const TopRated = () => {

    const dispatch = useAppDispatch()
    const {users,loading,error} = useAppSelector(s => s.TopRatedSlice);
    const {lang} = useAppSelector(s => s.SearchSlice);

    useEffect(() => {
        dispatch(getTopRated(lang))
        
    }, [])
    return (
        <div className='containers'>
            <div className='flex items-center overflow-x-auto'>
                {
                    users.map(el => (
                        <Card el={el}/>
                    ))
                }
            </div>
            
        </div>
    );
};

export default TopRated;