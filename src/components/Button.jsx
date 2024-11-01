import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';

function MyButton({ title, number, subtitle, gradientStyle }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 30;
    const y = ((clientY - top) / height - 0.5) * -30;

    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="flex gap-4 items-center">
      <Button
        size="lg"
        className="relative group overflow-hidden text-gray-300 font-semibold transition-transform duration-300 ease-in-out transform bg-transparent w-40 h-40 outline-none focus:outline-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
           minWidth: '160px', 
           minHeight: '160px',
          transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          ...gradientStyle,
        }}
      >
        <p className="text-lg font-light z-10">{title}</p>
        <p className="text-5xl font-bold z-10">
          {number}
          {title === 'календарик за' && (
            <span className="text-sm font-normal align-super">г.</span>
          )}
        </p>
        <p className="text-lg font-light z-10">{subtitle}</p>

        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
      </Button>
    </div>
  );
}

const Buttons = () => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const fetchButtons = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/buttons/');
        const data = await response.json();
        if (Array.isArray(data)) {
          setButtons(data);
        } else {
          console.error('Expected an array but received:', data);
        }
      } catch (error) {
        console.error('Failed to fetch buttons:', error);
      }
    };

    fetchButtons();
  }, []);

  const gradientStyles = [
    {
      background:
        'linear-gradient(to top left, rgba(128,128,128,0.3), rgba(128,128,128,0.1) 30%, transparent 80%)',
    },
    {
      background:
        'linear-gradient(to top right, rgba(128,128,128,0.3), rgba(128,128,128,0.1) 30%, transparent 80%)',
    },
    {
      background:
        'linear-gradient(to bottom left, rgba(128,128,128,0.3), rgba(128,128,128,0.1) 30%, transparent 80%)',
    },
    {
      background:
        'linear-gradient(to bottom right, rgba(128,128,128,0.3), rgba(128,128,128,0.1) 30%, transparent 80%)',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 mt-20">
      {buttons.map((button, index) => (
        <MyButton
          key={index}
          title={button.title}
          number={button.number}
          subtitle={button.subtitle}
          gradientStyle={gradientStyles[index % gradientStyles.length]}
        />
      ))}
    </div>
  );
};

export default Buttons;
