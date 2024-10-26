import React from 'react';

function DesignerButton({ label }) {
  return (
    <button className="relative px-6 py-3 text-gray-400 border-none bg-transparent font-semibold text-sm tracking-wider transition-transform duration-200 ease-out hover:scale-105 active:scale-95">
      {label}

      {/* Blue borders */}
      <span className="absolute top-0 left-0 h-0.5 w-full bg-gradient-to-l from-blue-500 to-transparent z-0"></span>
      <span className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent z-0"></span>
      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent z-0"></span>
      <span className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-blue-500 to-transparent z-0"></span>

      {/* White corners */}
      <span className="absolute top-0 right-0 h-0.5 w-1/12 bg-white z-10"></span>
      <span className="absolute top-0 right-0 w-0.5 h-1/4 bg-white z-10"></span>
      <span className="absolute bottom-0 left-0 h-0.5 w-1/12 bg-white z-10"></span>
      <span className="absolute bottom-0 left-0 w-0.5 h-1/4 bg-white z-10"></span>
    </button>
  );
}

export default DesignerButton;
