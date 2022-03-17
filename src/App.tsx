import React, { useState } from 'react';
import Color from './components/Color';
import OptionPackage from './components/OptionPackage';
import Power from './components/Power';
import Total from './components/Total';
import WarpDrive from './components/WarpDrive';

const App: React.FC = () => {

  let [colorPrice, setColorPrice] = useState<number>(0);
  let [powerPrice, setPowerPrice] = useState<number>(0);
  let [drivePrice, setDrivePrice] = useState<number>(0);
  let [packagePrice, setPackagePrice] = useState<number>(0);

  return (
    <div className="container">
      
      <header className="header">
        <p>Spaceship configurator</p>
      </header>
      
      <div id='body-container'>
        <main className='main'>
          <section className='category-section'>
            <p className='section-title'>Select color:</p>
            <Color
              colorPrice={colorPrice}
              setColorPrice={setColorPrice}
            />
          </section>
          <section className='category-section'>
            <p className='section-title'>Select power:</p>
            <Power
              powerPrice={powerPrice}
              setPowerPrice={setPowerPrice}
            />
          </section>
          <section className='category-section'>
            <p className='section-title'>Warp drive:</p>
            <WarpDrive
              drivePrice={drivePrice}
              setDrivePrice={setDrivePrice}
            />
          </section>
          <section className='category-section'>
            <p className='section-title'>Select option package:</p>
            <OptionPackage
              packagePrice={packagePrice}
              setPackagePrice={setPackagePrice}
            />
          </section>
        </main>
          
        <aside>
          <Total 
            colorPrice={colorPrice}
            powerPrice={powerPrice}
            drivePrice={drivePrice}
            packagePrice={packagePrice}
          />
        </aside>
      </div>
      
        
    </div>
  );
}

export default App;

