import React from 'react';
import logo from "../../image/logo.svg"
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../store/Reducers/ActionCreators';
import { useAppDispatch } from '../Hooks/useAppDispatch';
import { useAppSelector } from '../Hooks/useAppSelector';
import { getDark } from '../../store/Reducers/SearchSlice';
import { NavLink} from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {dark} = useAppSelector(s => s.SearchSlice)
    const {favorite} = useAppSelector(s => s.FavoriteSlice)
    const clickSubmit = (e: any) => {
        e.preventDefault()
        e.target.value = ""

    }
    const handleChane = (e: React.ChangeEvent<any>) => {
        dispatch(LanguageContext(e.target.value))
        
    } 
    const addDark = () => {
        dispatch(getDark())
       }
    return (

        <div className="bg-blue-900 fixed w-[100%]  z-10">
            <div className="containers">
                 <div className='py-[20px] flex items-center justify-between'>
                      <div className='header-logg flex items-center justify-between w-[560px] border-none outline-none'>
                          <img src={logo} alt=""  className='w-[160px]'/>
                          <a className='text-white text-[20px]' href="#">Фильмы</a>
                        <a className='text-white text-[20px]' href="#">Сериалы</a>
                        <form onSubmit={clickSubmit}>
                        <label>
                            <input type="text"  className='px-[10px] w-[170px] py-[1px] rounded-[5px] '
                            placeholder='Найти фильм' 
                            onChange={(e) => navigate(`/informResult/${e.target.value}`)}/>
                        </label>
                       </form>
                      </div>

                      <div className='flex items-center justify-between w-[500px]'>
                        <select onChange={e => handleChane(e)} className='bg-transparent border-[1px] outline-none rounded-[5px]'>
                        <option value="en-US">english</option>
                                    <option value="ru-RU">russian</option>
                                    <option value="tr-TR">turkce</option>
                                    <option value="fr-FR">french</option>
                        </select>
                        <button className='text-white text-[20px]'>Войти</button>
                        <div className='flex relative'>
                            <h6 className='absolute right-0 top-[-5px] text-[12px] font-bold'>{favorite.length}</h6>
                        <NavLink to={"/favorite"} className='text-white text-[20px]'>Избранные</NavLink>
                        </div>
                        

                        <button onClick={addDark} className='bg-white mx-[10px] px-[5px]' style={{
                            color: dark ? "black" : "blue"
                        }}>{dark ? "dark": "night"}</button>

                      
                        
                      </div>

                 </div>
            </div>
        </div>
    );
};

export default Header;