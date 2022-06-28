import React from 'react'

const ChangePassword = () => {
    return (
        <div className="flex items-center  bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto my-10 bg-white p-5 rounded shadow-sm">
          <div className="text-center">
            <h4 className="my-3 text-2xl font-bold text-gray-700 dark:text-gray-200">
              Change Your Password
            </h4>
            
          </div>
          <div className="m-7">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
            >
              <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                id=""
                style={{ display: "none" }}
              />

              
              <div className="mb-6">
                <label
                  htmlFor="old_password"
                  className="block mb-2 text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Current Password 
                </label>
                <input
                  type="text"
                  name="old_password"
                  id="old_password"
                  placeholder=""
                  required
                  className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="new_password"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  New Password
                </label>
                <input
                  type="text"
                  name="new_password"
                  id="new_password"
                  placeholder=""
                  required
                  className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
              </div>
              
              
              
              <div className="mb-6 flex justify-end space-x-2 items-center">
                <a href="" className="text-sm font-light">Cancel</a>
                <button
                  type="submit"
                  className="w-1/2 px-2 py-4 text-white bg-indigo-800 rounded-sm hover:bg-indigo-900 focus:bg-indigo-900 focus:outline-none"
                >
                  Change Password
                </button>
              
              </div>
              <p
                className="text-base text-center text-gray-400"
                id="result"
              ></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ChangePassword
