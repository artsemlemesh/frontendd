import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-neutral-900 p-6 z-50">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-auto max-w-7xl">
        {/* Logo on top for small screens and left for large screens */}
        <img src="/spacex-logo.png" alt="SpaceX" className="h-12 mb-4 lg:mb-0" />

        {/* Navigation links */}
        <nav className="hidden lg:flex lg:flex-row text-gray-300 space-x-6">
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
              className="group hover:text-gray-400 relative transition-colors block"
            >
              {item}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-400 scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </a>
          ))}
        </nav>

        {/* Mobile navigation links */}
        <nav className="lg:hidden flex flex-col items-center text-gray-300 space-y-4">
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