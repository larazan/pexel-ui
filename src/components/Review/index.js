import React from "react";

const Review = () => {
  return (
    <>
        <div className="mt-5 text-xl font-semibold">Reviews & ratings</div>
      <div class="w-3/4 border-t border-b py-3 mt-3">
          
        <div className="flex">
          <div className="w-1/3 py-4">
            <div className="mx-auto px-10 flex justify-between items-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold py-1">4.7</div>
                <div className="py-1">
                  <div class="flex items-center mt-1">
                    <svg
                      class="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-5 h-5 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
                <div className="text-1xl py-1 font-light">3107 ratings</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold py-1">
                    89%
                </div>
                <div className="text-1xl py-1 font-light">
                    Recommended
                </div>
                <div className="text-1xl py-1 font-light">
                    (916 of 1023)
                </div>
            </div>
            </div>
           
          </div>

          <div class="w-1/3 tracking-wide px-4 py-4">
            <div class="-mx-8 px-8 pb-3">
              <div class="flex items-center mt-1">
                <div class=" w-1/5 tracking-tighter font-light">
                  <span>5 star</span>
                </div>
                <div class="w-3/5">
                  <div class="bg-gray-300 w-full rounded-lg h-2">
                    <div class=" w-7/12 bg-green-600 rounded-lg h-2"></div>
                  </div>
                </div>
                <div class="w-1/5 text-gray-700 pl-3">
                  <span class="text-sm">2651</span>
                </div>
              </div>
              <div class="flex items-center mt-1">
                <div class="w-1/5 font-light tracking-tighter">
                  <span>4 star</span>
                </div>
                <div class="w-3/5">
                  <div class="bg-gray-300 w-full rounded-lg h-2">
                    <div class="w-1/5 bg-green-600 rounded-lg h-2"></div>
                  </div>
                </div>
                <div class="w-1/5 text-gray-700 pl-3">
                  <span class="text-sm">205</span>
                </div>
              </div>
              <div class="flex items-center mt-1">
                <div class="w-1/5 font-light tracking-tighter">
                  <span>3 star</span>
                </div>
                <div class="w-3/5">
                  <div class="bg-gray-300 w-full rounded-lg h-2">
                    <div class=" w-3/12 bg-green-600 rounded-lg h-2"></div>
                  </div>
                </div>
                <div class="w-1/5 text-gray-700 pl-3">
                  <span class="text-sm">54</span>
                </div>
              </div>
              <div class="flex items-center mt-1">
                <div class=" w-1/5 font-light tracking-tighter">
                  <span>2 star</span>
                </div>
                <div class="w-3/5">
                  <div class="bg-gray-300 w-full rounded-lg h-2">
                    <div class=" w-1/5 bg-green-600 rounded-lg h-2"></div>
                  </div>
                </div>
                <div class="w-1/5 text-gray-700 pl-3">
                  <span class="text-sm">41</span>
                </div>
              </div>
              <div class="flex items-center mt-1">
                <div class="w-1/5 font-light tracking-tighter">
                  <span>1 star</span>
                </div>
                <div class="w-3/5">
                  <div class="bg-gray-300 w-full rounded-lg h-2">
                    <div class=" w-2/12 bg-green-600 rounded-lg h-2"></div>
                  </div>
                </div>
                <div class="w-1/5 text-gray-700 pl-3">
                  <span class="text-sm">156</span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/3 px-4 py-4 ">
            <div className="flex flex-col space-y-2">
                <a href="" class="inline-flex bg-green-600 hover:bg-green-700 px-6 py-3 justify-center rounded-full border border-transparent text-sm leading-5 font-medium text-white">Write a review</a>
                <a href="" class="inline-flex hover:bg-gray-200 px-6 py-3 justify-center rounded-full border border-gray-500 text-sm leading-5 font-medium">See all reviews</a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-start w-1/2 mt-7 mb-20">
        <div class="flex-shrink-0">
          <div class="inline-block relative">
            <div class="relative w-12 h-12 rounded-full overflow-hidden">
              <img
                class="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                src="https://picsum.photos/id/646/200/200"
                alt="Profile picture"
              />
              <div class="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
            </div>
            <svg
              class="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
            </svg>
          </div>
        </div>
        <div class="ml-6">
          <p class="flex items-baseline">
            <span class="text-gray-600 font-bold">Mary T.</span>
            {/* <span class="ml-2 text-green-600 text-xs">Verified Buyer</span> */}
          </p>
          <div class="flex items-center mt-1">
            <svg
              class="w-3 h-3 fill-current "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              class="w-3 h-3 fill-current "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              class="w-3 h-3 fill-current "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              class="w-3 h-3 fill-current "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              class="w-3 h-3 fill-current text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>

          <div class="mt-3">
            <span class="font-semibold">Sapien consequat eleifend!</span>
            <p class="mt-1 font-light text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div class="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
            <div class="flex items-center">
              <span>Was this review helplful?</span>
              <button class="flex items-center ml-6">
                <svg
                  class="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                </svg>
                <span class="ml-2">56</span>
              </button>
              <button class="flex items-center ml-4">
                <svg
                  class="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                </svg>
                <span class="ml-2">10</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
