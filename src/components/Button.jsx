import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function MyButton({title, number, subtitle}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 30; // Change 30 to control tilt sensitivity
    const y = ((clientY - top) / height - 0.5) * -30; // Invert y-axis for correct direction

    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 }); // Reset tilt on mouse leave
  };

  return (
    <div className="flex gap-4 items-center">
      <Button
        size="lg"
        className="relative group overflow-hidden text-white font-semibold transition-transform duration-300 ease-in-out transform bg-transparent  w-40 h-40 outline-none focus:outline-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        <p className="text-lg z-10">{title}</p>
      <p className="text-5xl font-bold z-10">{number}</p>
      <p className="text-lg z-10">{subtitle}</p>

        {/* Hover opacity effect for corners */}
        <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out pointer-events-none"></div>
      </Button>

     
    </div>
  );
}