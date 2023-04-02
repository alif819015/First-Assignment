import React from 'react';
import './Header.css';
import img from '../../../public/Argentina_national_football_team_logo.svg.png';

const Header = () => {
    return (
        <div className='header'>
          <img src={img} alt="" /> 
          <h1>Argentina National Football Team</h1> 
        </div>
    );
};

export default Header;