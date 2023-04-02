import React from 'react';
import Features from '../features/features';

const PriceCard = ({price}) => {
    return (
        <div className='bg-sky-500 mt-5 rounded-md p-5 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-bold text-purple-900'>$ {price.price}</span>
                <span className='text-2xl text-white font-semibold'>/month</span>
            </h2>
            <h4 className='text-2xl font-bold mt-3 text-center'>{price.name}</h4>
            <p className='text-2xl mt-2 font-semibold text-yellow-100 mb-3'>features:</p>
            {
                price.features.map((feature,idx)=> <Features key={idx} feature={feature}></Features>)
            }
            <button className='bg-purple-700 w-full py-2 rounded-md text-white font-semibold mt-auto hover:bg-orange-600'>Bye Now</button>
        </div>
    );
};

export default PriceCard;