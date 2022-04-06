import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../store/auth.reducer";

//Login form Component
export default function LoginForm() {

  const [emailId, updateEmailId] = useState("");
  const [password, updatePassword] = useState("");

  const user = useSelector((state) => {
    console.log(state)
      return state.au.auth
    });

  let navigate = useNavigate();
  const dispatch = useDispatch();

  if(user.auth){
    navigate('/adminwork')
   }
   else{
       console.log('Display error message!');
   }

  //Function to navigate to registration form


  async function loginAdmin(e) {
    e.preventDefault()
    dispatch(adminLogin({ email: emailId, password: password }))
   
  }

  return (





    <div className=" flex   justify-center  via-red-500 to-pink-500 py-16 pb-40 ">
      <div className="  border-2 p-8 rounded-xl w-80 bg-gray-300 space-y-8">

        <div>

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
          <p className="mt-2 text-center text-sm text-gray-600"> </p>

        </div>

        <form>

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={emailId}
                onChange={(e) => updateEmailId(e.target.value)}
                required
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <br />

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => updatePassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <br />
          <div className="text-red-500 font-bold">{user.err}</div>
          <div className="text-red-500 font-bold">{user.adminerr}</div>

          <br/>



          <div>
            <button
              type="submit"
              className="cursor-pointer group relative w-full flex justify-center py-2 px-4 border border-transparent  rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={(e) => loginAdmin(e)}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <span class="material-icons">lock</span>
              </span>
              Sign in
            </button>
          </div>










        </form>


      </div>
    </div>










  )
}