import React, { useEffect, useState } from 'react'

interface Props {
    drivePrice: number,
    setDrivePrice: React.Dispatch<React.SetStateAction<number>>;
}

const WarpDrive: React.FC<Props> = ({drivePrice, setDrivePrice}) => {

    let [driveId, setDriveId] = useState<string>('no');
    const isSelected = (value: string): boolean => driveId === value;

    const handleClick  = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setDriveId(e.currentTarget.value);
    }

    useEffect(() => {
        switch (driveId) {
            case 'no':
                setDrivePrice(0);
                break;
            case 'yes':
                setDrivePrice(1000);
                break;
        }
    })
    
  return (
    <>
        <div className='section-container'>
            <label className='radio-button' tabIndex={0}>
                <input
                    type="radio"
                    name="radio-warp"
                    value="no"
                    checked={isSelected('no')}
                    onChange={handleClick}
                />
                <span className='input-span'>
                    <div className='item-details'>
                        <p className='item-title'>NO</p>
                        <p className='item-price'>+0€</p>
                    </div>
                </span>
            </label>
            <label className='radio-button' tabIndex={0}>
                <input
                    type="radio"
                    name="radio-warp"
                    value="yes"
                    checked={isSelected('yes')}
                    onChange={handleClick}
                />
                <span className='input-span'>
                    <div className='item-details'>
                        <p className='item-title'>YES</p>
                        <p className='item-price'>+1000€</p>
                    </div>
                </span>
            </label>
        </div>
    </>
  )
}

export default WarpDrive