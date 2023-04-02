import React from 'react';
import './Info.css';

const Info = ({cart}) => {
    // const cart = props.cart //option 1
    console.log(cart);
    let totalName = [];
    let totalPrice = 0;
    for(const player of cart){
        totalName = totalName + player.name;
        totalPrice = totalPrice + parseInt(player.price);
    }
    const tax = totalPrice*10/100;
    const total = totalPrice + tax;
    return (
        <div className='cart'>
          <h2>Player information's:</h2>
          <h5>Total Player: {cart.length}</h5>
          <h5>Name: <span className='name'>{totalName}</span></h5>
          <h5>Total Player Price: ${totalPrice}</h5>
          <h5>Tax: ${tax}</h5>
          <h4>Total: ${total}</h4>
        </div>
    );
};

export default Info;