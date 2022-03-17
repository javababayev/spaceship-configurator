import React, { useEffect, useState } from 'react'

interface Props {
    packagePrice: number,
    setPackagePrice: React.Dispatch<React.SetStateAction<number>>;
}

const OptionPackage: React.FC<Props> = ({packagePrice, setPackagePrice}) => {

    let [packageId, setPackageId] = useState<string>('basic');
    const isSelected = (value: string): boolean => packageId === value;

    const handleClick  = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPackageId(e.currentTarget.value);
    }

    console.log(packageId)

    useEffect(() => {
        switch (packageId) {
            case 'basic':
                setPackagePrice(0);
                break;
            case 'sport':
                setPackagePrice(100);
                break;
            case 'lux':
                setPackagePrice(500);
                break;
        }
    })
    
  return (
    <>
        <div className='section-container'>
            <label className='radio-button'>
                <input
                    type="radio"
                    name="radio-package"
                    value="basic"
                    checked={isSelected('basic')}
                    onChange={handleClick}
                />
                <span className='input-span'>
                    <div className='item-details of-package'>
                        <p className='item-title'>Basic</p>
                    </div>
                    <div className='package-details'>
                        <ul>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Air conditioning</span>
                            </li>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Cloth seats</span>
                            </li>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Fm radio</span>
                            </li>
                        </ul>
                    </div>
                </span>
            </label>
            <label className='radio-button'>
                <input
                    type="radio"
                    name="radio-package"
                    value="sport"
                    checked={isSelected('sport')}
                    onChange={handleClick}
                />
                <span className='input-span'>
                    <div className='item-details of-package'>
                        <p className='item-title'>Sport</p>
                        <p className='package-price'>+100€</p>
                    </div>
                    <div className='package-details'>
                        <ul>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Air conditioning</span>
                            </li>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Cloth seats</span>
                            </li>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Fm radio</span>
                            </li>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Personal tech support</span>
                            </li>
                        </ul>
                    </div>
                </span>
            </label>
            <label className='radio-button'>
                <input
                    type="radio"
                    name="radio-package"
                    value="lux"
                    checked={isSelected('lux')}
                    onChange={handleClick}
                />
                <span className='input-span'>
                    <div className='item-details of-package'>
                        <p className='item-title'>Lux</p>
                        <p className='package-price'>+500€</p>
                    </div>
                    <div className='package-details'>
                        <ul>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Air conditioning</span>
                            </li>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Luxury seats</span>
                            </li>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Fm radio</span>
                            </li>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Chrome weels</span>
                            </li>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Window tint</span>
                            </li>
                            <li>
                                <span className='detail-symbol'>&#9652;</span>
                                <span className='detail-text'>Subwoofer</span>
                            </li>
                        </ul>
                    </div>
                </span>
            </label>
        </div>
    </>
  )
}

export default OptionPackage