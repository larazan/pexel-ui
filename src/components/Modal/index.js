import React, { useCallback, useRef, useEffect } from "react";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const images = [
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1543297031-d102cd432d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1612832021026-375ae70f24bf?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Photo title",
      img:
        "https://images.unsplash.com/photo-1612905546247-1675f299b845?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const hue = [
    {
      name: "Blue",
      color: "#49607c",
    },
    {
      name: "Black",
      color: "#3b3b3b",
    },
    {
      name: "Red",
      color: "#b14754",
    },
    {
      name: "Pink",
      color: "#dfabb5",
    },
    {
      name: "Brown",
      color: "#bd9474",
    },
    {
      name: "Yellow",
      color: "#ead99a",
    },
  ];

  return (
    <>
      {showModal ? (
        <div
          class="main-modal fixed w-full h-full inset-0 z-20 flex justify-center items-center2 animated2 fadeIn2 faster2 overflow-y-auto"
          style={{ background: `rgba(12,15,19,.9)` }}
          ref={modalRef}
          onClick={closeModal}
        >
          <div className="fixed px-2 py-2 top-3 left-2">
            <button
              className="h-8 w-8"
              onClick={() => setShowModal((prev) => !prev)}
            >
              <svg
                className="h-8 w-8 text-white font-bold"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="absolute mt-8 border border-teal-500 modal-container bg-white w-8/12  rounded shadow-lg outline-none">
            <button
              className="h-15 w-15 absolute left-0 opacity-60 hover:opacity-90"
              style={{ top: `450px`, transform: `translateX(-175%)` }}
            >
              <svg
                className="h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="h-15 w-15 absolute right-0 opacity-60 hover:opacity-90"
              style={{ top: `450px`, transform: `translateX(175%)` }}
            >
              <svg
                className="h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="px-5 py-3 flex items-center justify-between">
              <div className="flex inline-flex space-x-4">
                <div className="flex inline-flex space-x-2 ">
                  <img
                    className="h-12 w-12 rounded-full flex items-center justify-center"
                    src="https://images.pexels.com/users/avatars/23776366/zhanna-fort-433.jpeg?auto=compress&fit=crop&h=60&w=60"
                    alt="user"
                  />
                  <div className="block place-self-center px-2 text-sm text-gray-600 font-semibold">
                    Zanna fort
                    <br />
                    <span className="text-sm font-light ">15k follower</span>
                  </div>
                </div>

                <div className="relative py-3 left-0 flex-0 inline-flex-0 space-x-2">
                  <button className="inline-flex items-center justify-center px-3 py-1 bg-white rounded border border-gray-300 cursor-pointer hover:bg-gray-300 font-medium">
                    <span className="text-sm">Follow</span>
                  </button>
                  <button className="inline-flex items-center justify-center px-3 py-1 bg-white rounded border border-gray-300 cursor-pointer hover:bg-gray-300 font-medium">
                    <span className="text-sm">Donate</span>
                  </button>
                </div>
              </div>

              <div className="flex inline-flex space-x-2">
                <button className="inline-flex items-center justify-center px-4 py-2 bg-white rounded border border-gray-300 cursor-pointer hover:border-blue-700 hover:border-4 hover:text-blue-700 font-medium">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-sm ml-2">29 Likes</span>
                </button>
                <button className="inline-flex items-center justify-center px-4 py-2 bg-white rounded border border-gray-300 cursor-pointer hover:border-blue-700 hover:border-4 hover:text-blue-700 font-medium">
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
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm ml-2">Collect</span>
                </button>
                <div className="inline-flex items-center justify-center">
                  <a
                    href=""
                    className="inline-flex bg-green-600 px-6 py-2 justify-center rounded-l boder border-transparent text-sm leading-5 font-medium text-white"
                  >
                    Free Download
                  </a>
                  <a href="" className="inline-flex bg-green-600 px-2 py-2 justify-center rounded-r border-l border-gray-900 text-sm leading-5 font-medium text-white">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <button
              className="h-20 w-20 padding-0 bg-gray-300 opacity-60 absolute left-0 hover:bg-gray-400"
              style={{ top: `250px` }}
            >
              <svg
                className="h-13 w-13 justify-center text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="h-20 w-20 padding-0 bg-gray-300 opacity-60 absolute right-0 hover:bg-gray-400"
              style={{ top: `250px` }}
            >
              <svg
                className="h-13 w-13 justify-center text-white"
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
            </button>

            <div className="px-5 py-5 flex items-center justify-center">
              <div className="w-1/2 h-1/2 flex items-center justify-center">
                <img
                  className="w-2/3 h-2/3"
                  src="https://images.pexels.com/photos/4857688/pexels-photo-4857688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
            </div>

            <div className="px-5 py-3 flex items-center justify-center">
              <div className="flex items-center px-2">
                <button className="h-5 w-5">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <span className="ml-2 text-sm font-light">78.8K views</span>
              </div>
              <div className="flex items-center px-2">
                <button className="h-5 w-5">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <span className="ml-2 text-sm font-light">Free to use</span>
              </div>
            </div>

            <div className="px-5 py-3 flex items-center justify-center">
              <div className="relative left-0 flex-0 inline-flex-0 space-x-2">
                <button className="inline-flex items-center justify-center px-3 py-1 bg-white rounded border border-gray-300 cursor-pointer hover:bg-gray-300 font-medium">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span className="text-sm pl-2">Share</span>
                </button>
                <button className="inline-flex items-center justify-center px-3 py-1 bg-white rounded border border-gray-300 cursor-pointer hover:bg-gray-300 font-medium">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm pl-2">Info</span>
                </button>
              </div>
            </div>

          <div className="" >

          
            <div className="px-5 py-3 flex justify-center space-x-4">
              <div className="space-y-4 w-80">
                <div className="border rounded px-5 py-3">
                  <div className="text-xs font-light uppercase">
                    Photographer
                  </div>
                  <div className="mt-3 flex inline-flex space-x-2 ">
                    <img
                      className="h-12 w-12 rounded-full flex items-center justify-center"
                      src="https://images.pexels.com/users/avatars/23776366/zhanna-fort-433.jpeg?auto=compress&fit=crop&h=60&w=60"
                      alt="user"
                    />
                    <div className="block place-self-center px-2 text-sm text-gray-600 font-semibold">
                      Zanna fort
                      <br />
                      <span className="text-sm font-light ">15k follower</span>
                    </div>
                  </div>
                  <div className="relative py-3 left-0 flex-0 inline-flex-0 space-x-2">
                    <button className="inline-flex items-center justify-center px-3 py-1 bg-white rounded border border-gray-300 cursor-pointer hover:bg-gray-300 font-medium">
                      <span className="text-sm">Follow</span>
                    </button>
                  </div>

                  <div className="py-3">
                    <div className="text-xs font-light uppercase">
                      <a href="#">more photos by henry</a>
                    </div>
                    <div className="mt-4 flex items-center space-x-6 md:space-x-2">
                      <span>
                        <a href="#" className="h-15 w-20 bg-gray-200 border  inline-block overflow-hidden">
                          <img src="https://images.pexels.com/photos/5197322/pexels-photo-5197322.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" alt="" />
                        </a>
                      </span>
                      <span>
                        <a href="#" className="h-15 w-20 bg-gray-200 border  inline-block overflow-hidden">
                          <img src="https://images.pexels.com/photos/5197277/pexels-photo-5197277.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280" alt="" />
                        </a>
                      </span>
                      {/* <span className="">
                        <button className="h-10 w-10 flex flex-col border border-gray-300 overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 ">
                          <span className="md:h-full md:w-full">
                            <img
                              className=""
                              src="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              alt=""
                            />
                          </span>
                        </button>
                      </span>
                      <span className="">
                        <button className="h-10 w-10 flex flex-col border border-gray-300 overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 ">
                          <span className="md:h-full md:w-full">
                            <img
                              className=""
                              src="https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              alt=""
                            />
                          </span>
                        </button>
                      </span>
                      <span className="">
                        <button className="h-10 w-10 flex flex-col border border-gray-300 overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 ">
                          <span className="md:h-full md:w-full">
                            <img
                              className=""
                              src="https://images.pexels.com/photos/5235860/pexels-photo-5235860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              alt=""
                            />
                          </span>
                        </button>
                      </span> */}
                      <span class="md:flex-1  md:flex">
                        <button
                          type="button"
                          class="h-10 w-10 border2 flex items-center md:aspect-h-1 md:w-full md:rounded-none"
                        >
                          <span class="flex items-center justify-center text-xs font-light">
                            +6 more
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border rounded px-5 py-3">
                  <div className="text-xs font-light uppercase">statistic</div>
                  <div className="px-5 py-3 flex justify-between">
                    <div className="flex inline-flex space-x-2 ">
                      <button className="h-6 w-6 md:flex items-center">
                        <svg
                          className="h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <span className="flex items-center uppercase text-2xl font-semibold text-green-500">
                        390k
                      </span>
                    </div>
                    <div className="flex inline-flex space-x-4 ">
                      <button className="h-6 w-6 md:flex items-center">
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
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-5 py-3 flex justify-center">
                    <div className="flex inline-flex space-x-4 ">
                      <button className="inline-flex items-center justify-center">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm pl-2">540</span>
                      </button>
                      <button className="inline-flex items-center justify-center">
                        <svg
                          className="h-6 w-6"
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
                        <span className="text-sm pl-2">126</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 w-80">
                <div className="border rounded px-5 py-3">
                  <div className="text-xs font-light uppercase">
                    photo information
                  </div>
                  <div className="py-3 text-xs font-light">
                    Uploaded at January 26, 2021
                  </div>
                  <div>
                    <table className="w-full flex text-sm font-light">
                      <tbody>
                        <tr>
                          <td className="text-left p-1">Lens</td>
                          <td className="font-semibold pl-1">
                            50.0mm ƒ/1.8 0.002s ISO 800
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left p-1">Size</td>
                          <td className="font-semibold pl-1">27.1 MB</td>
                        </tr>
                        <tr>
                          <td className="text-left p-1">Resolution</td>
                          <td className="font-semibold pl-1">
                            4480px x 5600px
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left p-1">Camera</td>
                          <td className="font-semibold pl-1">
                            Canon EOS 5D Mark IV
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left p-1">Software</td>
                          <td className="font-semibold pl-1">
                            Adobe Photoshop CC 2019 (Macintosh)
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left p-1">Taken at</td>
                          <td className="font-semibold pl-1">
                            January 07, 2020 3:31 pm
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left p-1">Aspect Ratio</td>
                          <td className="font-semibold pl-1">4:5</td>
                        </tr>
                        <tr>
                          <td className="text-left p-1">Colors</td>
                          <td className="font-semibold">
                            <div className="flex justify-center space-x-1">
                              {hue.map((color) => (
                                <div className="flex inline py-1.5">
                                  <button className="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                                    <span className="h-full w-full flex flex-col transform">
                                      <span
                                        className="h-6 w-6"
                                        style={{ backgroundColor: color.color }}
                                      ></span>
                                    </span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border rounded px-5 py-3">
                  <div className="text-xs font-light uppercase">license</div>
                  <div className="px-2 py-3 flex flex-col font-light">
                    <small>✓ Free to use.</small>
                    <small>✓ No attribution required.</small>
                  </div>
                  <div className="underline text-sm font-light">
                    <a href="#" >Learn more about the license »</a>
                  </div>
                </div>
              </div>
              
            </div>

            <div className="relative w-full px-5 py-3 flex inline-flex items-center justify-center">
              <a href="#" className="inline-flex bg-gray-200 hover:bg-gray-300 px-6 py-2 justify-center rounded boder border-transparent text-sm leading-5 font-light">Hide Information</a>
            </div>
          
          </div>

            <div className="top-0 px-5 py-3">
              <div className="py-4">
                <p className="text-lg font-bold">Similar Photos</p>
              </div>
              <div className="masonry-2 ">
                {images.map((item, i) => (
                  <div
                    className="overflow-hidden mb-8 hover:block"
                    key={i}
                    onclick="openModal()"
                  >
                    <div className="relative cursor-pointer">
                      <img className="" src={item.img} alt="" />

                      <div className="overlay absolute bottom-0 h-full w-full h-24 px-4 pt-6 opacity-0 hover:opacity-90">
                        <div className="absolute top-0 left-0 px-5 py-5">
                          <div className=" flex items-center space-x-6 md:space-x-2">
                            <div className="flex inline-flex space-x-2 ">
                              <img
                                className="h-6 w-6 rounded-full flex items-center justify-center"
                                src="https://images.pexels.com/users/avatars/23776366/zhanna-fort-433.jpeg?auto=compress&fit=crop&h=60&w=60"
                                alt="user"
                              />
                              <span className="text-white flex items-center text-sm font-light">
                                Zanna fort
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 px-5 py-3">
                          {/* <div className="flex inline-flex space-x-2 ">
                          <img
                            className="h-6 w-6 rounded-full flex items-center justify-center"
                            src="https://images.pexels.com/users/avatars/23776366/zhanna-fort-433.jpeg?auto=compress&fit=crop&h=60&w=60"
                            alt="user"
                          />
                          <span className="text-white flex items-center text-sm font-light">
                            Zanna fort
                          </span>
                        </div> */}

<div className="mt-4 flex items-center space-x-1 md:space-x-1">
                        <span className="">
                          <button className="h-7 w-7  ">
                            <svg className="h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </span>
                       
                       
                      
                            <span class="md:flex-1  md:flex">
                              <button
                                type="button"
                                class="h-10 w-10 border2 flex items-center justify-center md:aspect-h-1 md:w-full md:rounded-none"
                              >
                                <span class="flex items-center justify-center text-xs font-light text-white">
                                  +6 more
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 px-5 py-3">
                          <div className="flex inline-flex space-x-4 ">
                            <button className="h-6 w-6 md:flex items-center">
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
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                              </svg>
                            </button>
                            <button className="h-6 w-6 md:flex items-center">
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
                                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </button>
                            <button className="h-6 w-6 md:flex items-center">
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
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
