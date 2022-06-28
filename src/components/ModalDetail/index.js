import React, { useRef } from "react";

const ModalDetail = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

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

          <div class="absolute mt-16 border border-teal-500 modal-container bg-white w-8/12  rounded shadow-lg outline-none">
            <button
              className="h-15 w-15 absolute left-0 opacity-60 hover:opacity-90"
              style={{ top: `350px`, transform: `translateX(-175%)` }}
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
              style={{ top: `350px`, transform: `translateX(175%)` }}
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
                  <a
                    href=""
                    className="inline-flex bg-green-600 px-2 py-2 justify-center rounded-r border-l border-gray-900 text-sm leading-5 font-medium text-white"
                  >
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="px-5 py-5 flex items-center justify-center mb-10">
              <div className="w-1/2 h-1/2 flex items-center justify-center">
                <img
                  className="w-2/3 h-2/3"
                  src="https://images.pexels.com/photos/3200651/pexels-photo-3200651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>

              <div>
                <div className="border  px-5 py-3">
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

                <div className="border  px-5 py-3">
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
                                        style={{
                                          backgroundColor: color.color,
                                        }}
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

                <div className="border  px-5 py-3">
                  <div className="text-xs font-light uppercase">license</div>
                  <div className="px-2 py-3 flex flex-col font-light">
                    <small>✓ Free to use.</small>
                    <small>✓ No attribution required.</small>
                  </div>
                  <div className="underline text-sm font-light">
                    <a href="#">Learn more about the license »</a>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalDetail;
