import React from 'react';
import { Link } from 'react-router-dom';


const CoinCard = ({ coin }) => {
   const {image,name,current_price} = coin;
    
    return (
        <div className='shadow-kg rounded-2xl w-[250px bg-white p-4'>
            <Link to=''>
            <div className='flex gap-4 justify-between items-center'>
                <div className='flex-shrink-0'>
                    <img className='mx-auto object-cover rounded-full h-16 w-16' src={image} alt="" />
                </div>
                <div className='flex flex-col justify-end'>
                    <span className='text-gray-600 font-medium'>{name}</span>
                    <span className='text-right'>{current_price}</span>
                </div>
            </div>

            </Link>
        </div>
    );
};

export default CoinCard;