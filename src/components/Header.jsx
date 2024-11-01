import React, { useEffect, useState } from 'react';

function Header() {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/menu-items/');
        const data = await response.json();
        setNavItems(data);
        console.log('Nav Items:', data);
      } catch (error) {
        console.error('Failed to fetch navigation items:', error);
      }
    };

    fetchNavItems();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-neutral-900 p-6 z-50">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-7xl">
        {/* Logo */}
        <div className="relative inline-block">
          <img
            src="/spacex-logo.png"
            alt="SpaceX"
            className="h-12 mb-4 lg:mb-0"
          />
          {/* White corners */}
          <span
            className="absolute top-[-6px] right-[-6px] h-0.5  bg-white z-10"
            style={{ width: '10px' }}
          ></span>
          <span className="absolute top-[-6px] right-[-6px] w-0.5 h-1/4 bg-white z-10"></span>

          <span
            className="absolute top-[-6px] left-[-6px] h-0.5  bg-white z-10"
            style={{ width: '10px' }}
          ></span>
          <span className="absolute top-[-6px] left-[-6px] w-0.5 h-1/4 bg-white z-10"></span>

          <span
            className="absolute bottom-[-6px] left-[-6px] h-0.5  bg-white z-10"
            style={{ width: '10px' }}
          ></span>
          <span className="absolute bottom-[-6px] left-[-6px] w-0.5 h-1/4 bg-white z-10"></span>

          <span
            className="absolute bottom-[-6px] right-[-6px] h-0.5  bg-white z-10"
            style={{ width: '10px' }}
          ></span>
          <span className="absolute bottom-[-6px] right-[-6px] w-0.5 h-1/4 bg-white z-10"></span>
        </div>
        {/* Navigation links */}
        <nav className="hidden lg:flex lg:flex-row text-gray-300 space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="group hover:text-gray-400 relative transition-colors block"
            >
              {item.title}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-400 scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>

        {/* Mobile navigation links */}
        <nav className="lg:hidden grid grid-cols-2 gap-y-4 text-gray-300">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="group hover:text-gray-400 relative transition-colors block text-center"
            >
              {item.title}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-400 scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>
      </div>

      <div className="border-b border-gray-600 mt-4"></div>
    </header>
  );
}

export default Header;
