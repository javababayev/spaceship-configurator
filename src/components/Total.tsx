import React from 'react'

interface Props {
  colorPrice: number,
  powerPrice: number,
  drivePrice: number,
  packagePrice: number
}
const basePrice: number = 1000;

const Total: React.FC<Props> = ({colorPrice, powerPrice, drivePrice, packagePrice}) => {
  return (
   
    <div className='display'>
      <div className='details'>
        <ul>
          <li>
            <span className='detail-name'>Base price:</span>
          </li>
          <li>
            <span className='detail-name'>Color:</span>
          </li>
          <li>
            <span className='detail-name'>Power:</span>
          </li>
          <li>
            <span className='detail-name'>Warp drive:</span>
          </li>
          <li>
            <span className='detail-name'>Option package:</span>
          </li>
        </ul>
        <ul className='detail-price-list'>
          <li>
            <span className='detail-price'>1000€</span> 
          </li>
          <li>
            <span className='detail-price'>+{colorPrice}€</span> 
          </li>
          <li>
            <span className='detail-price'>+{powerPrice}€</span> 
          </li>
          <li>
            <span className='detail-price'>+{drivePrice}€</span> 
          </li>
          <li>
            <span className='detail-price'>+{packagePrice}€</span> 
          </li>
        </ul>
      </div>
      <div className='total'>
        <span className='detail-name'>Total:</span>
        <span className='detail-price total-price'>{basePrice+colorPrice+powerPrice+drivePrice+packagePrice}€</span> 
      </div>
    </div>
  )
}

export default Total