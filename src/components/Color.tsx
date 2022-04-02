import React, { useEffect, useState } from 'react'

interface Props {
    colorPrice: number,
    setColorPrice: React.Dispatch<React.SetStateAction<number>>;
}


const Color: React.FC<Props> = ({colorPrice, setColorPrice}) => {

    let [colorId, setColorId] = useState<string>('snow');
    const isSelected = (value: string): boolean => colorId === value;

    const handleClick  = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setColorId(e.currentTarget.value);
    }

    useEffect(() => {
        switch (colorId) {
            case 'snow':
                setColorPrice(0);
                break;
            case 'volcano':
                setColorPrice(100);
                break;
            case 'sky':
                setColorPrice(100);
                break;
        }
    })
    
  return (
    <>
        <div className='section-container'>
            <label className='radio-button' tabIndex={0}>
                <input
                    type="radio"
                    name="radio-color"
                    value="snow"
                    checked={isSelected('snow')}
                    onChange={handleClick}
                />
                <span className='input-span'>
                    <div className='item-details'>
                        <div id='snow' className='color-div'></div>
                        <p className='color-price'>+0€</p>
                        <p className='item-title'>Snow</p>
                    </div>
                </span>
            </label>
            <label className='radio-button' tabIndex={0}>
                <input
                    type="radio"
                    name="radio-color"
                    value="volcano"
                    checked={isSelected('volcano')}
                    onChange={handleClick}
                />
                <span className='input-span'>
                    <div className='item-details'>
                        <div id='volcano' className='color-div'></div>
                        <p className='color-price'>+100€</p>
                        <p className='item-title'>Volcano</p>
                    </div>
                </span>
            </label>
            <label className='radio-button' tabIndex={0}>
                <input
                    type="radio"
                    name="radio-color"
                    value="sky"
                    checked={isSelected('sky')}
                    onChange={handleClick}
                />
                <span className='input-span'>
                    <div className='item-details'>
                        <div id='sky' className='color-div'></div>
                        <p className='color-price'>+100€</p>
                        <p className='item-title'>Sky</p>
                    </div>
                </span>
            </label>
        </div>
    </>
  )
}

export default Color