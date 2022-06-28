import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="flex relative bg-gray-100 py-24 justify-center bg-top bg-hero"
        style={{
          background: `url("https://images.pexels.com/photos/3423860/pexels-photo-3423860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center center no-repeat`,
        }}
      >
        <div className="p-12 max-w-2xl hero relative">
          <div className="md:text-3xl text-3xl font-bold text-white">
            The best free stock photos & videos shared by talented creators.
          </div>
          <div className="mt-6 flex justify-center h-12 relative">
            <div className="flex items-center relative w-full mx-auto text-gray-600">
              <input
                className="bg-purple-white shadow rounded border-0 p-4 text-sm focus:outline-none w-full"
                type="search"
                name="search"
                placeholder="Search for free photos and videos"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-4 mr-3"
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="py-3 text-sm text-white">
            Trending:{" "}
            <span className="font-extralight">
              <a href="#">kithen</a>, <a href="#">vegetables</a>,{" "}
              <a href="#">chef</a>, <a href="#">cuisine</a>,{" "}
              <a href="#">knife</a>, <a href="#">bar</a>, <a href="#">more</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
