import React from 'react';

const Link = ({navItem}) => {
    return (
        <li className='md:text-xl font-semibold hover:bg-red-200 px-3 rounded-md'>
            <a href={navItem.link}>{navItem.name}</a>
        </li>
    );
};

export default Link;