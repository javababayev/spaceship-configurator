import React, { useEffect, useState } from 'react'

interface Props {
    powerPrice: number,
    setPowerPrice: React.Dispatch<React.SetStateAction<number>>;
}

const Power: React.FC<Props> = ({powerPrice, setPowerPrice}) => {

    let [powerId, setPowerId] = useState<string>('100-mw');
    const isSelected = (value: string): boolean => powerId === value;

    const handleClick  = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPowerId(e.currentTarget.value);
    }

    useEffect(() => {
        switch (powerId) {
            case '100-mw':
                setPowerPrice(0);
                break;
            case '150-mw':
                setPowerPrice(200);
                break;
            case '200-mw':
                setPowerPrice(500);
                break;
        }
    })
    
  return (
    <>
        <div className='section-container'>
            <label className='radio-button' tabIndex={0}>
                <input
                    type="radio"
                    name="radio-power"
                    value="100-mw"
                    checked={isSelected('100-mw')}
                    onChange={handleClick}
                />
                <span className='input-span'>
                    <div className='item-details'>
                        <p className='item-title'>100 MW</p>
                        <p className='item-price'>+0€</p>
                    </div>
                </span>
            </label>
            <label className='radio-button' tabIndex={0}>
                <input
                    type="radio"
                    name="radio-power"
                    value="150-mw"
                    checked={isSelected('150-mw')}
                    onChange={handleClick}
                />
                <span className='input-span'>
                    <div className='item-details'>
                        <p className='item-title'>150 MW</p>
                        <p className='item-price'>+200€</p>
                    </div>
                </span>
            </label>
            <label className='radio-button' tabIndex={0}>
                <input
                    type="radio"
                    name="radio-power"
                    value="200-mw"
                    checked={isSelected('200-mw')}
                    onChange={handleClick}
                />
                <span className='input-span'>
                    <div className='item-details'>
                        <p className='item-title'>200 MW</p>
                        <p className='item-price'>+500€</p>
                    </div>
                </span>
            </label>
        </div>
    </>
  )
}

export default Power