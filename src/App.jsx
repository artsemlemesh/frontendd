import React from 'react';
import { ShootingStars } from './components/stars/shooting-stars';
import { StarsBackground } from './components/stars/stars-background';
import Buttons from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="h-screen bg-cover bg-center relative">
        <ShootingStars />
        <StarsBackground className="bg-neutral-900" />

        <Header />

        {/* Main content limited by max-width */}
        <main className="flex flex-col lg:flex-row justify-center items-center text-center text-white h-full relative max-w-7xl mx-auto p-4 mt-24">
          {/* Container for the planet and its associated elements */}
          <div className="relative flex flex-col items-center lg:flex-row lg:items-start">
            {/* Mars Image */}
            <img
              src="/planet1.png"
              alt="Mars"
              className="h-96 w-96 object-cover z-20 mb-4 lg:mb-0 lg:absolute lg:top-40 lg:left-96 lg:-translate-x-1/2 lg:-translate-y-1/2" // Centering image absolutely with no offset
            />
            
            

            {/* Left Side Words */}
            <div className=" lg:relative z-10 left-[-4rem] top-1/4 lg:left-auto lg:top-0 lg:-translate-x-1/2 lg:-translate-y-1/4">
              <h1 className="animate-fadeIn relative bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
                <span className="text-7xl font-bold block">ПУТЕШЕСТВИЕ</span>
                <span className="text-3xl block">на красную планету</span>
              </h1>
            </div>
          </div>

          {/* Buttons on the right side */}
          <div className="flex justify-center lg:justify-end lg:ml-12 mt-4 lg:mt-0">
            <Buttons />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
