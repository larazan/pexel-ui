import React, { useState } from "react";

const Filter = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [showFilter1, setShowFilter1] = useState(false);
    const [showFilter2, setShowFilter2] = useState(false);

    const openFilter = () => {
        setShowFilter((prev) => !prev);
      };
    
      const openFilter1 = () => {
        setShowFilter1((prev) => !prev);
      };
    
      const openFilter2 = () => {
        setShowFilter2((prev) => !prev);
      };

      const colors = [
        '#f44336',
        '#673ab7',
        '#673ab7',
        '#2196f3',
        '#009688',
        '#4caf50',
        '#ffeb3b',
        '#795548',
        '#ffffff',
        '#000000',
      ]

    return (
        <>
            <div className="top-0 px-5 py-3 flex items-center justify-between">
          <div className="flex inline-flex space-x-2">
            <button className="inline-flex items-center justify-center px-4 py-2 bg-white2 text-gray-900 hover:bg-gray-200 text-white rounded-sm border border-gray-300 cursor-pointer hover:bg-white hover:text-black font-medium">
              <svg
                className="h-4 w-4 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm ml-2">Photos</span>
            </button>
            <button className="inline-flex items-center justify-center px-4 py-2 bg-white2 text-gray-900 hover:bg-gray-200 text-white rounded-sm border border-gray-300 cursor-pointer hover:bg-white hover:text-black font-medium">
              <svg
                className="h-4 w-4 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm ml-2">Videos</span>
            </button>
            <button className="inline-flex items-center justify-center px-4 py-2 bg-white2 text-gray-900 hover:bg-gray-200 text-white rounded-sm border border-gray-300 cursor-pointer hover:bg-white hover:text-black font-medium">
              <svg
                className="h-4 w-4 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-sm ml-2">Users</span>
            </button>
          </div>

          <div className="flex z-10 inline-flex space-x-2">
            
            <div
              className="flex "
              onMouseEnter={openFilter}
              onMouseLeave={openFilter}
            >
              <button className="inline-flex items-center justify-center px-4 py-2 text-gray-900 hover:bg-gray-200 rounded-full border border-gray-300 cursor-pointer hover:border-gray-300 hover:border-4 hover:bg-white text-white hover:text-black font-medium">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"></path>
                </svg>
                <span className="text-sm ml-2">Orientation</span>
              </button>
              <div
                className={`absolute ${
                  showFilter === false ? "hidden" : ""
                } w-50 mt-9 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
              >
                <div className="py-2">
                  <ul className="font-semibold text-xs">
                    <li className="hover:bg-gray-300">
                      <a
                        className="h-10 py-2 px-3 flex justify-between items-center "
                        href="#"
                      >
                        <span>All Orientations</span>
                        <button className="h-4 w-4 pl-5 pr-3">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                    <li className="hover:bg-gray-300">
                      <a
                        href="#"
                        className="h-10 py-2 px-3 flex justify-between items-center"
                      >
                        <div className="flex inline-flex items-center">
                          <button className="h-6 w-6">
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="16px"
                              viewBox="0 0 24 16"
                              version="1.1"
                            >
                              <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="Search-Filters->-Desktop->-Filter-Click"
                                  transform="translate(-914.000000, -184.000000)"
                                  fill="#9E9E9E"
                                  fillRule="nonzero"
                                >
                                  <path
                                    d="M935,184 C936.656854,184 938,185.343146 938,187 L938,197 C938,198.656854 936.656854,200 935,200 L917,200 C915.343146,200 914,198.656854 914,197 L914,187 C914,185.343146 915.343146,184 917,184 L935,184 Z M935,186 L917,186 C916.487164,186 916.064493,186.38604 916.006728,186.883379 L916,187 L916,197 C916,197.512836 916.38604,197.935507 916.883379,197.993272 L917,198 L935,198 C935.512836,198 935.935507,197.61396 935.993272,197.116621 L936,197 L936,187 C936,186.487164 935.61396,186.064493 935.116621,186.006728 L935,186 Z"
                                    id="Rectangle"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </button>
                          <span className="pl-3">Horizontal</span>
                        </div>
                        <button className="h-4 w-4 pl-5 pr-3">
                          <svg
                            className="h-4 w-4 hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                    <li className="hover:bg-gray-300">
                      <a
                        href="#"
                        className="h-10 py-2 px-3 flex justify-between items-center"
                      >
                        <div className="flex inline-flex items-center">
                          <button className="h-6 w-6">
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16px"
                              height="24px"
                              viewBox="0 0 16 24"
                              version="1.1"
                            >
                              <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <g
                                  id="Search-Filters->-Desktop->-Filter-Click"
                                  transform="translate(-918.000000, -220.000000)"
                                  fill="#9E9E9E"
                                  fill-rule="nonzero"
                                >
                                  <path
                                    d="M935,224 C936.656854,224 938,225.343146 938,227 L938,237 C938,238.656854 936.656854,240 935,240 L917,240 C915.343146,240 914,238.656854 914,237 L914,227 C914,225.343146 915.343146,224 917,224 L935,224 Z M935,226 L917,226 C916.487164,226 916.064493,226.38604 916.006728,226.883379 L916,227 L916,237 C916,237.512836 916.38604,237.935507 916.883379,237.993272 L917,238 L935,238 C935.512836,238 935.935507,237.61396 935.993272,237.116621 L936,237 L936,227 C936,226.487164 935.61396,226.064493 935.116621,226.006728 L935,226 Z"
                                    id="Rectangle"
                                    transform="translate(926.000000, 232.000000) rotate(-270.000000) translate(-926.000000, -232.000000) "
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </button>
                          <span className="pl-3">Vertical</span>
                        </div>
                        <button className="h-4 w-4 pl-5 pr-3">
                          <svg
                            className="h-4 w-4 hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="flex "
              onMouseEnter={openFilter1}
              onMouseLeave={openFilter1}
            >
              <button className="inline-flex items-center justify-center px-4 py-2 text-gray-900 hover:bg-gray-200 rounded-full border border-gray-300 cursor-pointer hover:border-gray-300 hover:border-4 hover:bg-white text-white hover:text-black font-medium">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"></path>
                </svg>
                <span className="text-sm ml-2">Size</span>
              </button>
              <div
                className={`absolute ${
                  showFilter1 === false ? "hidden" : ""
                } w-50 mt-9 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
              >
                <div className="py-2">
                  <ul className="font-semibold text-xs">
                    <li className="hover:bg-gray-300">
                      <a
                        className="h-10 py-2 px-3 flex justify-between items-center "
                        href="#"
                      >
                        <span>All Sizes</span>
                        <button className="h-4 w-4 pl-5 pr-3">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                    <li className="hover:bg-gray-300">
                      <a
                        href="#"
                        className="h-10 py-2 px-3 flex justify-between items-center"
                      >
                        <div className="flex inline-flex items-center">
                          <button className="h-6 w-6">
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="18px"
                              viewBox="0 0 24 18"
                              version="1.1"
                            >
                              <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <g
                                  id="Search-Filters->-Desktop->-Filter-Click"
                                  transform="translate(-1094.000000, -183.000000)"
                                  fill="#9E9E9E"
                                >
                                  <g
                                    id="Group-7"
                                    transform="translate(1094.000000, 183.000000)"
                                  >
                                    <path
                                      d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"
                                      id="Rectangle-Copy-28"
                                      fill-rule="nonzero"
                                    ></path>
                                    <path
                                      d="M5,4 L19,4 C19.5522847,4 20,4.44771525 20,5 L20,13 C20,13.5522847 19.5522847,14 19,14 L5,14 C4.44771525,14 4,13.5522847 4,13 L4,5 C4,4.44771525 4.44771525,4 5,4 Z"
                                      id="Rectangle-Copy-27"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </button>
                          <span className="pl-3">Large 24MP</span>
                        </div>
                        <button className="h-4 w-4 pl-5 pr-3">
                          <svg
                            className="h-4 w-4 hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                    <li className="hover:bg-gray-300">
                      <a
                        href="#"
                        className="h-10 py-2 px-3 flex justify-between items-center"
                      >
                        <div className="flex inline-flex items-center">
                          <button className="h-6 w-6">
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="18px"
                              viewBox="0 0 24 18"
                              version="1.1"
                            >
                              <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <g
                                  id="Search-Filters->-Desktop->-Filter-Click"
                                  transform="translate(-1094.000000, -223.000000)"
                                  fill="#9E9E9E"
                                >
                                  <g
                                    id="Group-8"
                                    transform="translate(1094.000000, 223.000000)"
                                  >
                                    <path
                                      d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"
                                      id="Rectangle-Copy-22"
                                      fill-rule="nonzero"
                                    ></path>
                                    <path
                                      d="M10,6 L19,6 C19.5522847,6 20,6.44771525 20,7 L20,13 C20,13.5522847 19.5522847,14 19,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,7 C9,6.44771525 9.44771525,6 10,6 Z"
                                      id="Rectangle-Copy-20"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </button>
                          <span className="pl-3">Medium 12MP</span>
                        </div>
                        <button className="h-4 w-4 pl-5 pr-3">
                          <svg
                            className="h-4 w-4 hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                    <li className="hover:bg-gray-300">
                      <a
                        href="#"
                        className="h-10 py-2 px-3 flex justify-between items-center"
                      >
                        <div className="flex inline-flex items-center">
                          <button className="h-6 w-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="18px"
                              viewBox="0 0 24 18"
                              version="1.1"
                            >
                              <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <g
                                  id="Search-Filters->-Desktop->-Filter-Click"
                                  transform="translate(-1094.000000, -263.000000)"
                                  fill="#9E9E9E"
                                >
                                  <g
                                    id="Group-9"
                                    transform="translate(1094.000000, 263.000000)"
                                  >
                                    <path
                                      d="M21,0 C22.6568542,0 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 L21,0 Z M21,2 L3,2 C2.48716416,2 2.06449284,2.38604019 2.00672773,2.88337887 L2,3 L2,15 C2,15.5128358 2.38604019,15.9355072 2.88337887,15.9932723 L3,16 L21,16 C21.5128358,16 21.9355072,15.6139598 21.9932723,15.1166211 L22,15 L22,3 C22,2.48716416 21.6139598,2.06449284 21.1166211,2.00672773 L21,2 Z"
                                      id="Rectangle-Copy-19"
                                      fill-rule="nonzero"
                                    ></path>
                                    <path
                                      d="M13,8 L19,8 C19.5522847,8 20,8.44771525 20,9 L20,13 C20,13.5522847 19.5522847,14 19,14 L13,14 C12.4477153,14 12,13.5522847 12,13 L12,9 C12,8.44771525 12.4477153,8 13,8 Z"
                                      id="Rectangle"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </button>
                          <span className="pl-3">Small 4MP</span>
                        </div>
                        <button className="h-4 w-4 pl-5 pr-3">
                          <svg
                            className="h-4 w-4 hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="flex "
              onMouseEnter={openFilter2}
              onMouseLeave={openFilter2}
            >
              <button className="inline-flex items-center justify-center px-4 py-2 text-gray-900 hover:bg-gray-200 rounded-full border border-gray-300 cursor-pointer hover:border-gray-300 hover:border-4 hover:bg-white text-white hover:text-black font-medium">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"></path>
                </svg>
                <span className="text-sm ml-2">Color</span>
              </button>
              <div
                className={`absolute ${
                  showFilter2 === false ? "hidden" : ""
                } w-50 mt-9 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
              >
                <div className="py-2">
                  <ul className="font-semibold text-xs">
                    <li className="hover:bg-gray-300">
                      <a
                        className="h-10 py-2 px-3 flex justify-between items-center "
                        href="#"
                      >
                        <span>All Colors</span>
                        <button className="h-4 w-4 pl-5 pr-3">
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
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                  </ul>
                  <div className="py-2 px-3">
                    <div className="flex flex-wrap" style={{width: `250px`}}>
                      {colors.map((color) => (
                        <a href="" className={`m-0.5 ${color === "#ffffff" ? "border" : ""} `}>
                          <div className="h-5 w-10 " style={{ backgroundColor: color }}>
                              
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Filter
