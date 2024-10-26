import React from 'react';
import { ShootingStars } from './components/stars/shooting-stars';
import { StarsBackground } from './components/stars/stars-background';
import Buttons from './components/Button';
import Header from './components/Header';
import DesignerButton from './components/SingleBtn';

function App() {
  return (
    <>
      <div className="h-screen bg-cover bg-center relative">
        <ShootingStars />
        <StarsBackground className="bg-neutral-900" />

        <Header />
        <div className=" lg:mt-10 lg:ml-40">
          <main className="flex flex-col lg:flex-row justify-center items-center text-center text-white h-full relative max-w-7xl mx-auto p-4 mt-24 lg:mt-0">
            <div className="relative flex flex-col items-center  lg:items-start mt-36 lg:mt-0">
              {/* Mars */}
              <img
                src="/planet1.png"
                alt="Mars"
                className="h-72 w-72 object-cover z-20 mb-4 lg:mb-0 lg:h-96 lg:w-96 lg:absolute lg:top-40 lg:left-96 lg:-translate-x-1/2 lg:-translate-y-1/2"
              />

              <div className="lg:relative z-10 left-[-4rem] top-1/4 lg:left-auto lg:top-0 lg:-translate-x-1/2 lg:-translate-y-1/4">
                <h1 className="animate-fadeIn relative bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent flex flex-col items-center lg:items-start">
                  <span className="text-5xl lg:text-7xl font-bold block">
                    ПУТЕШЕСТВИЕ
                  </span>
                  <span className="text-2xl lg:text-3xl block">
                    на красную планету
                  </span>
                </h1>
              </div>

              <div className="flex justify-center mt-4 lg:mt-0 lg:-translate-x-64 lg:translate-y-28">
                <DesignerButton label="Начать путешествие" />
                {/** line */}
                <div className="">
                  <svg
                    className="hidden lg:block absolute z-30"
                    width="1100"
                    height="100"
                  >
                    <defs>
                      <linearGradient
                        id="lineGradient"
                        x1="30%"
                        y1="30%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="10%"
                          style={{
                            stopColor: 'rgba(255, 255, 255, 0)',
                            stopOpacity: 1,
                          }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: 'white', stopOpacity: 1 }}
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 300 70 
       L 150 70 
       C -180 -40, -550 5, -70 30"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:ml-10  lg:justify-end  mt-4 lg:mt-14">
              <Buttons />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
