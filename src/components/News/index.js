import React from "react";

const News = () => {
  return (
    <>
      <div className="top-0 px-5 py-3 bg-black">
        <div className="px-8 py-8 z-9 md:container md:mx-auto md:px-8">
          <div className="text-lg text-gray-300 space-x-1 flex inline-flex font-bold">
            <a href="#" className="">
              Top News
            </a>
            <span className="flex items-center justify-center">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
          <div>
            <section className="flex flex-row flex-wrap mx-auto">
              <div className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/3 lg:w-1/4">
                <a href="#">
                  <div className="flex inline-flex items-stretch min-h-full pb-4 transition-all duration-150 bg-transparent rounded-sm shadow-md hover:shadow-2xl hover:opacity-70 cursor-pointer">
                    <div className="md:flex-shrink-0">
                      <img
                        src="https://m.media-amazon.com/images/M/MV5BNjE4Njk1OTQtZjI0MC00MGRkLWEwMGEtYmM1OTZjZDJlZjAwXkEyXkFqcGdeQXVyNTkxNDI2OTA@._V1_UY268_CR4,0,182,268_AL_.jpg"
                        alt="Blog Cover"
                        className="object-fill w-30 md:h-40"
                      />
                    </div>
                    <div className="pl-3 flex flex-wrap content-between">
                      <div className="text-white tracking-wide">
                        ‘The Old Guard,’ ‘Wonder Woman 1984′ and ‘Promising
                        Young Woman’ Among Films to Score ReFrame Stamp
                      </div>
                      <div className="flex-1 justify-between py-2 text-xs text-white font-light tracking-wide">
                        <div className="capitalize">18 Feb</div>
                        <span className="capitalize">Variety - Film News</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/3 lg:w-1/4">
                <div className="flex inline-flex items-stretch min-h-full pb-4 transition-all duration-150 bg-transparent rounded-sm shadow-md hover:shadow-2xl hover:opacity-70 cursor-pointer">
                  <div className="md:flex-shrink-0">
                    <img
                      src="https://m.media-amazon.com/images/M/MV5BYWU2ZTRhNDMtMWYxMC00ZTVkLThjZmItZGY4MGU0YmZlMjJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY150_CR0,0,100,150_AL_.jpg"
                      alt="Blog Cover"
                      className="object-fill w-30 md:h-40"
                    />
                  </div>
                  <div className="pl-3 flex flex-wrap content-between">
                    <div className="text-white tracking-wide">
                      '99% of the world has no idea': inside the shocking legal
                      guardianship industry
                    </div>
                    <div className="flex-1 justify-between py-2 text-xs text-white font-light tracking-wide">
                      <div className="capitalize">18 Feb</div>
                      <span className="capitalize">
                        The Guardian - Film News
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/3 lg:w-1/4">
                <div className="flex inline-flex items-stretch min-h-full pb-4 transition-all duration-150 bg-transparent rounded-sm shadow-md hover:shadow-2xl hover:opacity-70 cursor-pointer">
                  <div className="md:flex-shrink-0">
                    <img
                      SRC="https://m.media-amazon.com/images/M/MV5BNzMzYmRiNGEtMDg5OC00OGZmLWFmNDktYzRlZTFkZmZiMjAzXkEyXkFqcGdeQXVyMTE2OTE2MzE1._V1_SY150_CR1,0,100,150_AL_.jpg"
                      alt="Blog Cover"
                      className="object-fill w-30 md:h-40"
                    />
                  </div>
                  <div className="pl-3 flex flex-wrap content-between">
                    <div className="text-white tracking-wide">
                      ‘Conversations with Friends’ Cast Announced for Hulu
                      Series Based on ‘Normal People’ Author’s Debut Novel
                    </div>
                    <div className="flex-1 justify-between py-2 text-xs text-white font-light tracking-wide">
                      <div className="capitalize">17 Feb</div>
                      <span className="capitalize">Slash Film - Film News</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/3 lg:w-1/4">
                <div className="flex inline-flex items-stretch min-h-full pb-4 transition-all duration-150 bg-transparent rounded-sm shadow-md hover:shadow-2xl hover:opacity-70 cursor-pointer">
                  <div className="md:flex-shrink-0">
                    <img
                      src="https://m.media-amazon.com/images/M/MV5BODRiNmFhY2EtMGY2OC00YjI2LWIyYjQtYzFiM2ZhNjdhYzE4XkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_SY150_SX100_AL_.jpg"
                      alt="Blog Cover"
                      className="object-fill w-30 md:h-40"
                    />
                  </div>
                  <div className="pl-3 flex flex-wrap content-between">
                    <div className="text-white tracking-wide">
                      'Constantine’ Reboot Series Being Developed by J.J.
                      Abrams’ Bad Robot for HBO Max
                    </div>
                    <div className="flex-1 justify-between py-2 text-xs text-white font-light tracking-wide">
                      <div className="capitalize">17 Feb</div>
                      <span className="capitalize">Slash Film - Film News</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
