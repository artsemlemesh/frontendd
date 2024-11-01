import React from 'react';
import { ShootingStars } from './components/stars/shooting-stars';
import { StarsBackground } from './components/stars/stars-background';
import Buttons from './components/Button';
import Header from './components/Header';
import Line from './components/Line';
import RocketLine from './components/RocketLine';

function App() {
  return (
    <>
      <div className="min-h-screen bg-cover bg-center relative ">
        <ShootingStars />
        <StarsBackground className="bg-neutral-900" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className="rounded-full"
            style={{
              width: '100px',
              height: '70px',
              boxShadow: '0 0 100px 120px rgba(255, 100, 0, 1)',
              position: 'absolute',
              top: '33%',
              left: '53%',
              transform: 'translate(-54%, -44%)',
            }}
          ></div>
        </div>
        <Header />
        <div className="2lg:mt-10 2lg:ml-40">
          <main className="flex flex-col 2lg:flex-row justify-center items-center text-center text-white h-full relative max-w-7xl mx-auto p-4 mt-28 sm:mt-28 2lg:mt-0">
            <div className="relative flex flex-col items-center 2lg:items-start mt-44 2lg:mt-0 z-20">
              {/* Mars */}
              <img
                src="/planet1.png"
                alt="Mars"
                className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 object-cover z-20 mb-4 2lg:mb-0 2lg:h-[500px] 2lg:w-[500px] 2lg:absolute 2lg:top-40 2lg:left-96 2lg:-translate-x-1/2 2lg:-translate-y-1/2 
                           scale-125 md:scale-100 lg:scale-90 2lg:scale-75"
              />
              <RocketLine />

              <div className="2lg:relative z-10 left-[-4rem] top-1/4 2lg:left-auto 2lg:top-0 2lg:-translate-x-1/2 2lg:-translate-y-1/4">
                <h1 className="animate-fadeIn relative bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent flex flex-col items-center 2lg:items-start">
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2lg:text-7xl font-bold block">
                    ПУТЕШЕСТВИЕ
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2lg:text-3xl block">
                    на красную планету
                  </span>
                </h1>
              </div>

              <Line />
            </div>

            <div className="flex justify-center 2lg:ml-10 2lg:justify-end mt-4 2lg:mt-14">
              <Buttons />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
