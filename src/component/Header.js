import React, {useEffect, useState} from "react";
import "../component/Header.css"
import {useNavigate} from "react-router-dom";
import  {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../store/cart-reducer";
import { logout } from "../store/auth.reducer";

const auth = (state) => {
  // console.log("dd", state.au.auth);
  return state.au.auth}

export default function Header(props){
  let navigate = useNavigate();
  const user = useSelector(auth)
  const dispatch = useDispatch();
  
  
  const cart = useSelector((state) => {
    // console.log(state)
      return state.cr.cart
    })

    // useEffect(() => {
    //   console.log('Init ... View Products .... ');
    //   dispatch(fetchCart())
    // }, [dispatch])
 

   

   
     

   

  
    

  

  
    return(
        <div class="navigation">
  <div class="nav-container">
    <div class="brand ">
    <span>E-Commerce App</span>
    </div>
    <nav>
      <ul class="nav-list">
        <li>
          <Link className="home-link" to="/">Home</Link>
        </li>
        <li>
         {!user.auth && <Link className="admin-link" to="/admin"> Admin</Link>}
        </li>
        <li>
         {!user.auth && <Link className="login-link" to="/login">Sign In</Link>}
        </li>
        <li onClick={()=>dispatch(logout())}>{user.auth &&<Link to="">Log out</Link>}</li>
        <li class="text-3xl">{user.auth && <Link to="/profile"><div><i class="   fas fa-user-circle" ></i><span className="text-xl">{user.user}</span></div></Link>}</li>
        <li class="text-3xl">{user.auth && <Link to="/cart"><span class="material-icons">shopping_cart </span><span className="text-2xl">{cart.length}</span></Link>}</li>

      </ul>
      
    </nav>
    
  </div>
        </div>
    )
}