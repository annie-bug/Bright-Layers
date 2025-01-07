import React from "react";

const FeaturesPC = () => {
  return (
    <div className="hidden md:flex justify-center">
        {/* Take the call section*/}
        <div className="flex flex-col items-center w-[14.30556rem] h-[6.20369rem] relative mr-20">
            {/* take the call text */}
            <div className="w-[9.53706rem] h-[5.09263rem] absolute text-right text-[#303338] text-[2.28831rem] font-semibold font-pSans leading-[2.70025rem] tracking-[0.02288rem]">Take <br />The Call</div>
            {/* svg and "tea or coffee" section */}
            
            <div className="absolute flex flex-col justify-start left-[12.8125rem] top-[0.625rem]">
                <svg
          width="42"
          height="43"
          viewBox="0 0 42 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition ease-in-out duration-500 group-hover:-rotate-12 w-[1.75925rem] h-[1.80556rem] mb-[0.8rem]"
        >
          <g id="Cup Icon">
            <path
              id="Vector"
              d="M28 15C28.5304 15 29.0391 15.2107 29.4142 15.5858C29.7893 15.9609 30 16.4696 30 17V33C30 35.1217 29.1571 37.1566 27.6569 38.6569C26.1566 40.1571 24.1217 41 22 41H10C7.87827 41 5.84344 40.1571 4.34315 38.6569C2.84285 37.1566 2 35.1217 2 33V17C2 16.4696 2.21071 15.9609 2.58579 15.5858C2.96086 15.2107 3.46957 15 4 15H32C34.1217 15 36.1566 15.8429 37.6569 17.3431C39.1571 18.8434 40 20.8783 40 23C40 25.1217 39.1571 27.1566 37.6569 28.6569C36.1566 30.1571 34.1217 31 32 31H30"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M16 2V6"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_3"
              d="M24 2V6"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_4"
              d="M8 2V6"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
            <div className="w-[3.33331rem] h-[4.07406rem] text-[#F97316] font-inter text-[0.64813rem] font-medium leading-[0.92594rem] tracking-[0.03244rem]">TEA OR COFFEE?</div>
        </div>
        </div>

        <div className="mr-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="97" viewBox="0 0 3 97" fill="none">
        <path d="M1.7041 0.81665V96.3722" stroke="black" stroke-width="1.48148" className="w-0 h-[5.97225rem]"/>
        </svg>
        </div>
        
        {/* Know About Us section*/}
        <div className="flex flex-row items-center justify-center mt-[0.2rem]">
            {/* svg and "who are you" section */}
            <div className="flex flex-col items-center justify-center space-y-4 mr-3">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[2.22225rem] h-[2.22225rem]">
                    <path d="M32 42V38C32 35.8783 31.1571 33.8434 29.6569 32.3431C28.1566 30.8429 26.1217 30 24 30H12C9.87827 30 7.84344 30.8429 6.34315 32.3431C4.84285 33.8434 4 35.8783 4 38V42" stroke="#F97316" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 22C22.4183 22 26 18.4183 26 14C26 9.58172 22.4183 6 18 6C13.5817 6 10 9.58172 10 14C10 18.4183 13.5817 22 18 22Z" stroke="#F97316" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M44 42V38C43.9987 36.2275 43.4087 34.5056 42.3227 33.1046C41.2368 31.7037 39.7163 30.7031 38 30.26" stroke="#F97316" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M32 6.26001C33.7208 6.70061 35.2461 7.70141 36.3353 9.10463C37.4245 10.5078 38.0157 12.2337 38.0157 14.01C38.0157 15.7864 37.4245 17.5122 36.3353 18.9154C35.2461 20.3186 33.7208 21.3194 32 21.76" stroke="#F97316" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="w-[3.33331rem] h-[1.85188rem] text-[#F97316] font-inter text-[0.64813rem] font-medium leading-[0.92594rem] tracking-[0.03244rem]">WHO ARE WE?</div>
            </div>
        </div>
        <div className="w-[9.86113rem] h-[5.09263rem] text-[#313338] font-pSans text-[2.28831rem] font-semibold leading-[3rem] tracking-[-0.04575rem]">
            Know <br /> About Us
        </div>

    </div>
  );
};

export default FeaturesPC;
