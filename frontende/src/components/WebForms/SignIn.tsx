import React from 'react'
import { Link } from 'react-router-dom';

type SignInProps = {
    handleCreatePortal: () => void;
    portal:string;
}

const SignIn = ({handleCreatePortal, portal}: SignInProps) => {
  return (
    <>
    <h3 className="mb-4 text-xl fpnt-medium text-gray-900">
    {portal === 'Support' ? 'Support Family Login' : "Provider's Login"}
   </h3>
    <form className="space-y-6" action="#">
    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray=900"
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:outline-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>

       <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:outline-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
       </div>

       <div className="flex justify-between">
          <div className="flex items-start">
              <div className="flex items-center h-5">
                  <input type="checkbox" id="trust" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" />
              </div>
              <label htmlFor="trust" className="ml-2 text-sm font-medium text-gray-900">Trust This Device?</label>
          </div>
          <Link to="#" className="text-sm text-blue-700 hover:underline">Forgot Password?</Link>
       </div>

       <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
       <div className="text-sm font-medium text-gray-500">
          Not registered?{""}
          <Link to="#" onClick={handleCreatePortal} className="text-blue-700 hover:underline">{portal === 'Support' ? 'Create Support Family Account' : "Create Provider's Account"}</Link>
       </div>
  </form>
  </>

  )
}

export default SignIn