import React from 'react';
import { ShootingStars } from './components/stars/shooting-stars';
import { StarsBackground } from './components/stars/stars-background';
import Buttons from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center relative"
        // style={{ backgroundImage: "url('/black-bg.png')" }}
      >
        <ShootingStars />
        <StarsBackground className="bg-neutral-900" />

        {/* Fixed header with z-index */}
        {/* <header className="fixed top-0 left-0 right-0 bg-neutral-900 p-6 z-50 ">
          <div className="flex justify-between items-center mx-auto max-w-7xl">
            <img src="/spacex-logo.png" alt="SpaceX" className="h-12" />
            <nav className="flex space-x-6 text-gray-300 ">
              {[
                'Главная',
                'Технология',
                'График полетов',
                'Гарантии',
                'О компании',
                'Контакты',
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group hover:text-gray-400 relative transition-colors"
                >
                  {item}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-400 scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                </a>
              ))}
            </nav>
          </div>
          <div className="border-b border-gray-600 mt-4"></div>
        </header> */}
        <Header/>

        {/* Main content limited by max-width */}
        <main className="flex flex-col md:flex-row justify-center items-center text-center text-white h-full relative max-w-7xl mx-auto p-4 mt-24">
          {/* Container for the planet and its associated elements */}
          <div className="relative flex justify-center items-center">
            {/* Mars Image */}
            <img
              src="/planet.png"
              alt="Mars"
              className="h-96 w-96 object-cover z-20"
            />

            {/* Left Side Words */}
            <div className="absolute left-[-31rem] top-1/3 transform -translate-y-1/2">
              <h1 className="animate-fadeIn relative z-10 bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
                <span className="text-7xl font-bold block">ПУТЕШЕСТВИЕ</span>
                <span className="text-3xl block">на красную планету</span>
              </h1>
            </div>
          </div>

          {/* Buttons on the right side */}
          <div className="absolute right-20 top-1/3 transform -translate-y-1/2 md:top-1/2 md:flex md:flex-col md:items-end">
            <Buttons />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;