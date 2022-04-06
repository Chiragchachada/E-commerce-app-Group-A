import React, { useState , useEffect} from "react";
import {Route,  Routes } from 'react-router-dom'
import './App.css';
import Header from './component/Header';
import Homepage from './component/Homepage';
import RegistrationForm from "./component/RegistrationForm";
import Products from "./component/Products";
import Footer from "./component/Footer";
import LoginForm from "./component/LoginForm";
import AdminLogin from "./component/AdminLogin"
import LoginRestriction from "./component/LoginRestriction"
import PrivateRoute from "./component/PrivateRoute"
import Cart from "./component/Cart";
import AdminWork from "./component/AdminWork";
import Profile from "./component/Profile";
import {useSelector } from "react-redux";
import Loginregis from "./component/Login";


function App() {
  const user = useSelector((state) => {
    console.log(state)
      return state.au.auth
    })
  


   return (
    
    <div className="App">
      
      <Header/>
      <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/adminwork" element={<AdminWork/>}/>
      <Route exact path ="/admin" element={<AdminLogin/>}/>



        <Route element={<LoginRestriction />}>

        <Route exact path="/register" element={<RegistrationForm/>}/>
        {/* <Route exact path="/login" element={<LoginForm/>}/> */}
        <Route exact path="/login" element={<Loginregis/>}/>


       
       </Route>
       
      <Route element={<PrivateRoute />}>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      </Route>



      </Routes>
      <div className="">
      <Footer/>
      </div>











    </div>
    
  );
}

export default App;
