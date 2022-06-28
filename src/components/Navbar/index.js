import React, { useState } from "react";


const Navbar = () => {
    const [showDrop, setShowDrop] = useState(false);
    const [showDrop1, setShowDrop1] = useState(false);
    const [showDrop2, setShowDrop2] = useState(false);

    const openDrop = () => {
        console.log("open drop");
        setShowDrop((prev) => !prev);
    };
    
    const openDrop1 = () => {
        console.log("open drop");
        setShowDrop1((prev) => !prev);
    };

    const openDrop2 = () => {
        console.log("open drop");
        setShowDrop2((prev) => !prev);
    };

    return (
        <>
            <header className="z-20 sticky top-0 px-5 py-3 flex items-center justify-between  bg-gray-900">
        {/* <div className="absolute inset-0 shadow-lg opacity-50"></div> */}
        <div className="flex inline-flex space-x-4">
          <button className="h-10 w-10">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
            >
              <path
                d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                fill="#05A081"
              ></path>
              <path
                d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
                fill="#fff"
              ></path>
            </svg>
          </button>
          <div className="flex items-center hidden md:flex">
            <a className="text-sm font-semibold text-white uppercase " href="#">
              Pexels
            </a>
          </div>
          <div className="flex items-center relative w-96 mx-auto text-gray-600">
            <input
              className="bg-purple-white shadow rounded border-0 p-3 text-sm focus:outline-none w-full"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-4 mr-3">
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

        <div className="flex inline-flex space-x-4">
          <div
            className="flex"
            onMouseEnter={openDrop1}
            onMouseLeave={openDrop1}
          >
            <div className="flex items-center">
              <a
                className="text-sm font-semibold uppercase text-white"
                href="#"
              >
                Explore
              </a>
            </div>
            <div
              className={`absolute ${
                showDrop1 === false ? "hidden" : ""
              } mt-8 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
            >
              <div className="py-2">
                <ul className="font-semilight">
                  <li className="py-1 px-3 hover:bg-gray-300">
                    <a href="#">Discover Photos</a>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-300">
                    <a href="#">Populer Searches</a>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-300">
                    <a href="#">Leaderboard</a>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-300">
                    <a href="#">Challenges</a>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-300">
                    <a href="#">Free Videos</a>
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-300">
                    <a href="#">Pexels Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center hidden md:flex">
            <a className="text-sm font-semibold uppercase text-white" href="#">
              License
            </a>
          </div>
          <button
            type="button"
            className="h-8 w-8 hidden md:flex items-center"
            onClick={openDrop}
          >
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <div
            className={`w-80 ${
              showDrop === false ? "hidden" : ""
            }  mt-10 mr-35 absolute font-normal bg-white shadow-md rounded overflow-hidden border`}
          >
            <div className="px-3 py-3 border-b">
              <div className="flex w-full justify-between">
                <div className="font-semibold">Notification</div>
                <button className="h-4 w-4">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="py-3 flex flex-inline">
                <div className="w-1/4 rounded">
                  <img
                    className="h-50 w-50 rounded-full"
                    src="https://www.pexels.com/assets/_svg/high_five-ac43c9bbbb0dda24f8c45e6302b60d4ca163ad7b0317a24ff31c23c2479b1eb2.svg"
                    alt=""
                  />
                </div>
                <div className="w-3/4 pl-3">
                  <p className="text-sm font-light">
                    Virtual high five for joining Pexels! We’re striving to
                    build the most extraordinary photo community and are proud
                    to work with talented photographers from around the world
                    who submit thousands of free photos per day. You can help
                    the community by:
                    <ul className="list-disc font-semibold">
                      <li>Uploading your photos</li>
                      <li>Following photographers that inspire you</li>
                      <li>Discovering and liking trending photos</li>
                    </ul>
                    6 months
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="h-8 w-8 hidden md:flex items-center cursor-pointer"
            onClick={openDrop2}
          >
            <svg
              className="h-6 w-6 text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
          <div
            className={`w-80 ${
              showDrop2 === false ? "hidden" : ""
            } mt-10 mr-15 absolute font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
          >
            <div className="py-2">
              <ul className="font-semilight">
                <li className="py-1 px-3 hover:bg-gray-300">
                  <a href="#">Your Profile</a>
                </li>
                <li className="py-1 px-3 hover:bg-gray-300">
                  <a href="#">Your Collections</a>
                </li>
                <li className="py-1 px-3 hover:bg-gray-300">
                  <a href="#">Settings</a>
                </li>
                <li className="py-1 px-3 hover:bg-gray-300">
                  <a href="#">Change Language</a>
                </li>
                <li className="py-1 px-3 hover:bg-gray-300">
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
            <hr></hr>
            <div className="py-2">
              <ul className="font-semilight">
                <li className="py-1 px-3 hover:bg-gray-300">
                  <a href="#">Image & Video API</a>
                </li>
                <li className="py-1 px-3 hover:bg-gray-300">
                  <a href="#">Apps & Plugins</a>
                </li>
                <li className="py-1 px-3 hover:bg-gray-300">
                  <a href="#">FAQ</a>
                </li>
                <li className="py-1 px-3 hover:bg-gray-300">
                  <a href="#">Partnerships</a>
                </li>
                <li className="py-1 px-3 hover:bg-gray-300">
                  <a href="#">Imprint & Terms</a>
                </li>
              </ul>
            </div>
            <div className="py-3">
              <div>
                <div className="items-center min-w-full">
                  <div className="flex-auto">
                    <ul className="inline-flex space-x-5 ">
                      <li>
                        <a className="" href="#">
                          <img
                            className="bg-gray=600"
                            src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/7ALf4NFNH4VStmrXU0qSKK/1"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <img
                            src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/7jsrb2oMQypD1kO6iZLXZN/1"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <img
                            src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/55ZLXdMQu728huA78Qlfkb/1"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="" href="#">
                          <img
                            src="https://cdn.allbirds.com/image/upload/q_auto/production/anchorLink/en-US/images/5VBkylibm5XkgzjDP153Mo/1"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="h-8 w-8 items-center">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
          </button>

          <div className="flex items-center">
            <a
              href=""
              className="inline-flex bg-green-600 px-6 py-2 justify-center rounded boder border-transparent text-sm leading-5 font-medium text-white"
            >
              Upload
            </a>
          </div>
        </div>
      </header>
        </>
    )
}

export default Navbar
