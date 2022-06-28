import React, { useState, useRef } from "react";

import Hero from "../Hero";
import Products from "../Products";
import News from "../News";
import Filter from "../Filter";

const Home = () => {
  return (
    <>
      <Hero />

      <main className="relative px-8 z-9 md:container md:mx-auto md:px-8">
        <div className="top-10 px-5 py-3 mt-5">
          <div>
            <div className="text-sm text-gray-600 space-x-1 flex inline-flex">
              <a href="#" className="">
                Explore
              </a>
              <span className="flex items-center justify-center">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span className="font-semibold text-gray-900">Background</span>
            </div>
          </div>
        </div>
        <div className="top-0 px-5 py-3 mb-10">
          <div className="text-5xl font-bold ">
            HQ Background Images
          </div>
          <div className="text-lg py-5 w-1/2 ">
            <p>
              Browse our beautiful selection of free background images–all
              submitted by our community of talented contributors and completely
              free to download and use.
            </p>
          </div>
        </div>

        <Filter />
        <Products />
        
      </main>
      <News />
    </>
  );
};

export default Home;
