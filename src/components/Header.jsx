import React, { useEffect, useState } from 'react';

function Header() {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/menu-items/');
        const data = await response.json();
        // Assuming data is an array of navigation items
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
        {/* Logo on top for small screens and left for large screens */}
        <img src="/spacex-logo.png" alt="SpaceX" className="h-12 mb-4 lg:mb-0" />

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
      className="group hover:text-gray-400 relative transition-colors block text-center"
    >
      {item}
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