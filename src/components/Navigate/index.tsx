import React, {useState} from 'react';
import {NavLink} from"react-router-dom"
const Navigate = () => {

    const [click, setClick] = useState(false)
   
        

    return (
        <div className='containers'>
            <div className='w-[390px] flex items-center justify-between py-[15px]'>
                 <h1 className='text-[25px]'>В тренде</h1>

                <button className='w-[220px] border-[2px]   rounded-[30px] flex justify-between '>
               <NavLink onClick={() => setClick(false)} to={"/popular"} className="text-[17px]" style={{
                background: click? "": "blue",
                padding: "3px 15px",
                borderRadius: "15px",
               }}>
                     Popular
                </NavLink>
                <NavLink onClick={() => setClick(true)} to={"/topRated"} className="text-[17px]" style={{
                background: click? "blue": "",
                padding: "3px 15px",
                borderRadius: "15px",
               }}>
                Top-Rated
                </NavLink>

                </button>
            </div>
            
        </div>
    );
};

export default Navigate;