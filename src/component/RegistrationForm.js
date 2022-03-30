import React, { useState} from "react"; 
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { singup } from "../store/auth.reducer";



export default  function RegistrationForm (){
  
  const navigate = useNavigate();
  const [userName, updateUserName] = useState("") 
  const [emailId, updateEmailId] = useState("");
  const [password, updatePassword] = useState("");
  const [confirmPassword, updateConfirmPassword] = useState("");
  const [role, updateRole] = useState("");

  const dispatch = useDispatch();

  const createAccount=(e)=>{
    e.preventDefault();
    dispatch(singup({username:userName, email:emailId, password: password, role: role }))
    navigate('/products')
  }


  

 
    return(
        <div className=" flex   justify-center  via-red-500 to-pink-500 py-16 pb-40 ">
        <div className="  border-2 p-8 rounded-xl flex justify-center w-1/3 bg-gray-300 space-y-8">
           <div className="w-80 ">
           <div>
           
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>

           </div >

           <br/>

            <form >

            <div className="rounded-md shadow-sm -space-y-px">

            <div>
                <label className="sr-only">
                  Username
                </label>
                <input
                  id="Username"
                  name="Username"
                  type="text"
                  value={userName}
                  onChange={(e)=>updateUserName(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>

              <br/>
              
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={emailId}
                  required
                  onChange={(e)=>updateEmailId(e.target.value)}
                  autoComplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              <br/>

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
                  onChange={(e)=>updatePassword(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <br/>

              <div>
                <label htmlFor="password" className="sr-only">
                 Re enter Password
                </label>
                <input
                  id="Renter-password"
                  name="Renter-pass"
                  type="password"
                  autoComplete="re-enter-password"
                  value={confirmPassword}
                  onChange={(e)=>updateConfirmPassword(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Re Enter Password"
                />
              </div>

              <br/>

              <div>
                <label htmlFor="role" className="sr-only">
                  Role
                </label>
                <input
                  id="role"
                  name="role"
                  type="role"
                  value={role}
                  required
                  onChange={(e)=>updateRole(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Role"
                />
              </div>

             

            </div>

            <br/>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                 onClick={(e)=>createAccount(e)}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <span class="material-icons">lock</span>
                </span>
               Register
              </button>
            </div>

            

              



            </form>

            </div>


        </div>
     </div>

    )
}