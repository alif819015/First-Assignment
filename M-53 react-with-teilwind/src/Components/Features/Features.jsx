import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div className='flex items-center gap-2'>
            <CheckCircleIcon className="h-5 w-5 text-yellow-700" />
            <span>{feature}</span>
            
        </div>
    );
};

export default Features;