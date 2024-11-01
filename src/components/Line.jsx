import DesignerButton from "./SingleBtn";

function Line() {


  return (
    <div className="flex justify-center mt-4 2lg:mt-0 2lg:-translate-x-64 2lg:translate-y-28 ">
      <DesignerButton label="Начать путешествие" />
      <div className=" ">
        <svg
          className="hidden 2lg:block absolute z-30"
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
            d="M 400 70 
                         L 150 70 
                         C -180 -40, -900 5, -70 30"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}


export default Line;