import React from 'react';
import InfoGrid from './components/infoBlock';
import { ShootingStarsAndStarsBackground } from './components/stars/Background';
import { ShootingStars } from './components/stars/shooting-stars';
import { StarsBackground } from './components/stars/stars-background';
import MyButton from './components/Button';

function App() {
  return (
    <>
      


      <div
        className="h-screen bg-cover bg-center relative"
        // style={{ backgroundImage: "url('/black-bg.png')" }}
      >
        <ShootingStars/>
        <StarsBackground className='bg-neutral-900'/>
        <header className="flex justify-between items-center p-6">
          <img src="/spacex-logo.png" alt="SpaceX" className="h-12" />
          <nav className="flex space-x-6 text-white">
            {[
              'Главная',
              'Технология',
              'График полетов',
              'Гарантии',
              'О компании',
              'Контакты',
            ].map((item) => (
              <a href="#" className="hover:text-orange-500 transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </header>

        <main className="flex justify-center items-center text-center text-white h-full relative">
          <div className="relative">
            {/* Title */}
            <h1 className="animate-fadeIn relative z-10 -left-72 -top-20 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
              <span className="text-7xl font-bold block">ПУТЕШЕСТВИЕ</span>
              <span className="text-3xl block ">на красную планету</span>{' '}

              {/* Adjusted -left-32 to -left-12 for visibility */}
            </h1>
            
            {/* Mars Image */}
            <div className="absolute inset-0 m-auto z-20 flex justify-center items-center">
              <img
                src="/planet.png"
                alt="Mars"
                className="h-96 w-96 object-cover"
              />
            </div>

            {/* Button BEHIND THE PLANET */}
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 transition-transform transform hover:scale-105 text-white rounded-lg font-semibold animate-bounce relative z-0 -mt-16">
              Начать путешествие
            </button>
          </div>

          {/* InfoGrid on the right side */}
          <div className="absolute right-16 top-1/3">
            <InfoGrid />
            <MyButton title='sfa' number='234' subtitle='sdfasdf'/>

          </div>
        </main>
      </div>
    </>
  );
}

export default App;
