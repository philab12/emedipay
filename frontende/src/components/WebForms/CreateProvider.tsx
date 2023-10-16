import React from 'react'

type Props = {}

const CreateProvider = (props: Props) => {
  return (
    <>
        <h3 className="mb-4 text-xl fpnt-medium text-gray-900">
    {/* {portal === 'Support' ? 'Support Family Login' : "Provider's Login"} */}
    Create Provider Family Member
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


   
  </form>
  </>
  )
}

export default CreateProvider