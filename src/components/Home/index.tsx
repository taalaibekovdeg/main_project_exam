import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../Hooks/useAppSelector';


const Home = () => {
    
    const navigate = useNavigate()
    const clickSubmit = (e: any) => {
        e.preventDefault()

    }
    const {user} = useAppSelector(s => s.DetailSlice) 

    return (
        <div className='h-[90vh] pt-[100px]' style={{
            background: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${user.backdrop_path}') no-repeat`
        }}>
            <div className="containers">
                <div className='flex flex-col items-start justify-center pt-[14%]'>
                    <h1 className='text-[40px] font-bold'>Добро пожаловать.</h1>
                    <h3 className='text-[27px]'>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
                    
                    <div>
                    <input type="text"  placeholder='Найти фильм, сериал, персону......' className='w-[1200px]  py-3 px-[20px] rounded-[30px] border-none outline-none text-black'
                    onChange={(e) => navigate(`/informResult/${e.target.value}`)}
                   />
                    </div>                
                </div>
            </div>
        </div>
    );
};

export default Home;