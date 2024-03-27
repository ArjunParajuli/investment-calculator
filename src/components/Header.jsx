import React from 'react'
import image from '../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <div id="header">
        <img src={image} alt="money_bag"  />
        <h3>Investment Calculator</h3>
    </div>
  )
}

export default Header