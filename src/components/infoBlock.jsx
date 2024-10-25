
// InfoBlock component for each square
const InfoBlock = ({ title, number, subtitle }) => (
    <div className="relative w-40 h-40 bg-transparent text-white rounded-lg flex flex-col justify-center items-center transition-transform duration-300 ease-in-out overflow-hidden group hover:scale-105">
      
      {/* Opaque Corner Effect */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 group-hover:bg-transparent transition-all duration-300"></div>
  
      {/* Thin White Borders on Hover */}
      <div className="absolute inset-0 border-t border-l border-transparent group-hover:border-white transition-all duration-300"></div>
  
      {/* Text Content */}
      <p className="text-lg z-10">{title}</p>
      <p className="text-5xl font-bold z-10">{number}</p>
      <p className="text-lg z-10">{subtitle}</p>
    </div>
  );
  
  // InfoGrid component to arrange InfoBlocks in a 2x2 grid
  const InfoGrid = () => (
    <div className="grid grid-cols-2 gap-6 mt-20">
      <InfoBlock title="мы" number="1" subtitle="на рынке" />
      <InfoBlock title="гарантируем" number="50%" subtitle="безопасность" />
      <InfoBlock title="путешествие" number="597" subtitle="дней" />
      <InfoBlock title="календарик" number="2001 г." subtitle="в подарок" />
    </div>
  );
  
  export default InfoGrid;