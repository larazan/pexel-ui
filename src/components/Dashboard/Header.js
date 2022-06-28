import React from 'react'
import { Link } from "react-router-dom";

const TwitterLogo = ({ className }) => {
    return (
      <svg width="20" height="20" fill="currentColor" className={className}>
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
      </svg>
    );
  };

const Header = () => {
    return (
        <>
            <div className="bg-white pt-6 pb-3 border-b border-gray-200">
        <div className="md:container md:mx-auto md:px-8">
          <div className="flex-0 py-8 mb-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between ">
                <div className="flex space-x-8 ">
                  <div>
                    <img
                      className="h-24 w-24 rounded-full"
                      src="https://wanita.network/assets/uploads/article/thumb_1591945453.jpeg"
                    />
                  </div>
                  <div className="flex flex-col justify-between space-y-4">
                    <div className="flex items-center space-x-3">
                      <h1 className="text-4xl leading-10 font-bold">
                        Ayana Jihye
                      </h1>
                      <span className="inline-flex rounded-full bg-gray-50 border border-gray-200 px-2 text-xs leading-5 font-medium text-black uppercase tracking-wide">
                        hobby
                      </span>
                    </div>
                    <div>
                      <dl>
                        <dt className="text-xs leading-5 font-medium text-gray-500 uppercase tracking-wide">
                          Git integration
                        </dt>
                        <dd className="flex items-center space-x-2 text-sm leading-5 font-medium">
                          <TwitterLogo className="" />
                          <span>ayanajihye</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <Link href="#">
                    <a className=" inline-flex rounded border border-gray-200 bg-white px-6 py-2 text-sm items-center leading-5 text-gray-500 font-medium">
                      <svg
                        className="h-4 w-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                      </svg>
                      Follow
                    </a>
                  </Link>
                  <Link href="#">
                    <a className=" inline-flex rounded border border-transparent bg-green-600 px-6 py-2 text-sm leading-5 text-white items-center">
                      <svg
                        className="h-4 w-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Message
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex inline-flex px-10  md:px-12 ">
              <div className="max-w-5xl mx-auto">
                <nav className="-mb-px flex space-x-6 text-sm leading-5">
                  <Link href="#">
                    <a className="inline-flex border-b-2 border-black px-0.5 py-4 text-black items-center">
                      <svg
                        className="h-4 w-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                      Overview
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="inline-flex border-b-2 border-transparent px-0.5 py-4 text-gray-500 hover:text-black transition ease-in-out duration-150 items-center">
                      <svg
                        className="h-4 w-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="mr-1">29</span>
                      Photos
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="inline-flex border-b-2 border-transparent px-0.5 py-4 text-gray-500 hover:text-black transition ease-in-out duration-150 items-center">
                      <svg
                        className="h-4 w-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="mr-1">2.7k</span>
                      Likes
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="inline-flex border-b-2 border-transparent px-0.5 py-4 text-gray-500 hover:text-black transition ease-in-out duration-150 items-center">
                      <svg
                        className="h-4 w-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                      <span className="mr-1">5</span>
                      Collections
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="inline-flex border-b-2 border-transparent px-0.5 py-4 text-gray-500 hover:text-black transition ease-in-out duration-150 items-center">
                      <svg
                        className="h-4 w-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="mr-1">1.4k</span>
                      Followers
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="inline-flex border-b-2 border-transparent px-0.5 py-4 text-gray-500 hover:text-black transition ease-in-out duration-150 items-center">
                      <svg
                        className="h-4 w-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                      </svg>
                      <span className="mr-1">33</span>
                      Following
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Header
