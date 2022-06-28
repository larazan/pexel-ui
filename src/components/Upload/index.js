import React from 'react'

const Upload = () => {
    return (
        <main className="bg-white pt-6 pb-3 min-h-screen">
            <div className="container mx-auto md:px-8">
                <div className="max-w-md mx-auto my-10 flex justify-center flex-col ">
                    <div className="text-2xl font-bold mx-auto text-center pb-3">Upload Photo & Videos</div>
                    <ul className="list-disc text-sm font-light">
                        <li>Your uploads will be distributed for free under the Pexels license. Learn more</li>
                        <li>To increase the chance of being featured, please ensure that your submissions meet our guidelines.</li>
                        <li>We'll review your submission. If it gets selected, you will receive an email notification and your content will be featured in our search.</li>
                    </ul>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="border border-dashed border-2 border-gray-500 relative bg-gray-200">
                        <input type="file" multiple className="cursor-pointer relative block opacity-0 w-full h-20 z-50" />
                        <div className="flex  justify-center items-center p-6 absolute top-0 right-0 left-0 m-auto">
                            <div className="mr-4">
                                <a href="" className="bg-green-600 px-6 py-2 justify-center rounded boder border-transparent text-sm leading-5 font-medium text-white">Browse</a>
                            </div>
                            <span className="text-sm font-light">or drag & drop files</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto my-16">
                    <div className="flex items-center space-x-6">
                        <div className="w-1/2">
                            <div className="w-full h-96 bg-gray-200 ">

                            </div>
                        </div>
                        <div className="w-1/2">
                            <form>
                            <div className="mb-6">
                                    <label
                                    htmlFor="phone"
                                    className="text-sm font-bold text-gray-600 dark:text-gray-400"
                                    >
                                    Tags <span className="text-xs font-extralight">(optional)</span>
                                    </label>
                                    <input
                                    type="text"
                                    name="bio"
                                    id="bio"
                                    placeholder=""
                                    required
                                    className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
                                </div>
                                <div className="mb-6">
                                    <label
                                    htmlFor="phone"
                                    className="text-sm font-bold text-gray-600 dark:text-gray-400"
                                    >
                                    Location <span className="text-xs font-extralight">(optional)</span>
                                    </label>
                                    <input
                                    type="text"
                                    name="web"
                                    id="web"
                                    placeholder=""
                                    required
                                    className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
                                </div>
                                <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-sm font-bold text-gray-600 dark:text-gray-400"
                >
                  Challenges <span className="text-xs font-extralight">(optional)</span>
                </label>
                <div className="py-1">
                    <div className="text-sm font-light py-2">Take part in relevant challenges to win prizes:</div>
                  <input type="checkbox" name="" id="" className="mr-1 bg-white shadow " />
                  <span class="ml-2 text-sm text-gray-700 pt-1">Mellow Yellow</span>
                </div>
              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Upload
