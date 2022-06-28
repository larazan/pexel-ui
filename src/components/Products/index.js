import React, { useState, useRef } from "react";

import Modal from "../Modal";

const Products = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("modal open!");
    setShowModal((prev) => !prev);
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

  return (
    <>
      <div className="top-0 px-5 py-3">
        <div className="masonry ">
          {images.map((item, i) => (
            <div
              className="overflow-hidden mb-8 hover:block "
              key={i}
              onClick={openModal}
            >
              <div className="relative cursor-pointer">
                <img className="" src={item.img} alt="" />

                <div className="overlay absolute bottom-0 h-full w-full px-4 pt-3 opacity-0 hover:opacity-100">
                  <div className="absolute top-0 left-0 px-5 py-4">
                    <div className=" flex justify-between space-x-6 md:space-x-2">
                      <div className="flex space-x-2 ">
                        <img
                          className="h-6 w-6 rounded-full flex  justify-center"
                          src="https://images.pexels.com/users/avatars/23776366/zhanna-fort-433.jpeg?auto=compress&fit=crop&h=60&w=60"
                          alt="user"
                        />
                        <span className="text-white flex  text-sm font-light">
                          Zanna fort
                        </span>
                      </div>
                      <div className="w-1/2 flex ">
                        <span className="text-white flex items-center text-sm font- text-right">
                          Starbucks Fairtrade Frappuccino Coffee Drink Caramel
                          Flavour 250ml
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
                          <svg
                            className="h-7 w-7 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
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
                  <div className="absolute bottom-0 right-0 px-5 py-3 mb-2">
                    <div className="flex inline-flex2 flex-col space-y-2 ">
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
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
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
      <div className="my-6 relative w-full px-5 py-3 flex inline-flex items-center justify-center">
        <a
          href="#"
          className="inline-flex rounded-lg bg-gray-800 hover:bg-gray-300 px-10 py-4 justify-center rounded-sm border border-white text-sm text-white hover:text-black leading-5 font-semibold"
        >
          Load more
        </a>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Products;
