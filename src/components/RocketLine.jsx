


function RocketLine(){
    return (
        <div >
        <svg
          className="hidden 2lg:block absolute top-[210px] left-[-50px] z-30"
          width="1100"
          height="1000"
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
            d="M 430 70 
                         L 150 70 
                         Q -180 -40, -900 5, -70 30"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    )
}

export default RocketLine;