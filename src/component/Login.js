import './Logincss.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../store/auth.reducer';
import { singup } from "../store/auth.reducer";

 export default function Loginregis() {

  const [emailId, updateEmailId] = useState("");
    const [password, updatePassword] = useState("");

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const user = useSelector((state) => {
      console.log(state)
        return state.au.auth
      });

      const [userName, setUserName] = useState("") 
      const [email, setEmail] = useState("");
      const [pass, setPass] = useState("");
      const [confirmPass, setConfirmPass] = useState("");
      const [role, setRole] = useState("");
    
    
      const createAccount=(e)=>{
        e.preventDefault();
        dispatch(singup({username:userName, email:email, password: pass, role: role }))
        navigate('/products')
      }
      const loginUser = (e)=>{
        e.preventDefault();
        dispatch(login({email:emailId, password:password}))
        // navigate('/products')
        if(user.auth ===true){
          navigate('/products')
         }
         else{
             console.log('Display error message!');
         }
        
      }
      // console.log(user);
     

  return (
    <div className='d-flex main nodiv   justify-content-evenly mb-28'>
      <div className='text-center   m-5-auto'>

        <div className='myleftctn ml-80'>
            
          <h2 className='myleftctn_header'>Log In</h2>

          <form action='/'>
            <p>
    
              <br />
              <input
                type='text'
                className='myinput'value={emailId}
                onChange={(e)=>updateEmailId(e.target.value)} placeholder='Email'
                name='first_name'
                required
              />
            </p>
            <p>
              
              <br />
              <input
                type='password'
                className='myinput'
                value={password}
                  onChange={(e)=>updatePassword(e.target.value)} placeholder='Password'
                name='password'
                required
              />
            </p>
            <div className="text-red-500 font-bold">{user.err}</div>
            <div className="text-red-500 font-bold">{user.usererr}</div>
            <p>
              <button className='butt'onClick={(e)=>loginUser(e)} type='submit'>
                Login
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* sign up page */}

      <div className='text-center w-50 m-5-auto '>
        <div className='myrightctn w-50 '>
          <h2 className='myrightctn_header'>Create New Account</h2>
          <form action='/'>
            <p>
          
              <br />
              <input
                type='text' className='myinput'value={userName}
                onChange={(e)=>setUserName(e.target.value)} placeholder='UserName' name='first_name' required/>
            </p>
            <p>
            
              
              <input type='email' value={email}
                  onChange={(e)=>setEmail(e.target.value)}className='myinput' placeholder='Email' name='email' required />
            </p>
            <p>
              
              
              <input
                type='password'
                className='myinput' value={pass}
                onChange={(e)=>setPass(e.target.value)}placeholder='Password'
                name='password'
                required
              />
            </p>
            
            <p>
              
             
              <input
                type='password'
                className='myinput' value={confirmPass}
                onChange={(e)=>setConfirmPass(e.target.value)} placeholder='Confirm Password'
                name='password'
                required
              />
            </p>

            <p>
              
              
              <input
                type='Role'
                className='myinput'value={role}
                onChange={(e)=>setRole(e.target.value)} placeholder='Role'
                name='password'
                required
              />
            </p>

            <p>
              <button className='butt'onClick={(e)=>createAccount(e)} type='submit'>
                Register
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

