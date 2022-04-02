import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react"

import { deleteFromCart, fetchCart, fetchqueryCart } from '../store/cart-reducer'
export default function Cart(){

    const cart = useSelector((state) => {
        console.log(state)
          return state.cr.cart
        })
        const auth = (state) => {
          return state.au.auth}
          const user = useSelector(auth)
          const id = user.userId
          
        const dispatch = useDispatch();
          // const category = "mobile"
        useEffect(() => {
            console.log('Init ... View Products .... ');
            dispatch(fetchCart({id:id}))
          }, [cart])
      
        const mapCart= cart.map((item, index)=>{return <div className="h-64  mt-4 grid grid-rows-3 grid-flow-col gap-4" key={index}>    
        <div className="flex flex-row justify-between border-gray-400 shadow-lg h-52 mx-16">
        <div className="h-44 w-44 bg-gray-300 mt-4 ml-4">
        <img className="h-40 w-40 mt-2" src={item.image} alt="image"/>    
        </div>
        <div className="w-80 p-8">                  
            <h3 className="title text-red-400 font-semibold">{item.title}</h3>   
            <p className="item-desc">{item.category}</p>  
            <p className="price font-bold">Price: Rs.{item.price}</p>
        </div> 
        <div className="py-20 pr-16">
            <button 
            className="rmvbtn bg-red-500 shadow-lg text-white py-2 px-6 shadow rounded-sm"
            onClick={()=>dispatch(deleteFromCart(item._id))}
            >REMOVE</button>
        </div>
        </div>

        </div>
        })  
    return(
        <div className='mb-40'>
      <div className="text-2xl flex justify-center bg-gradient-to-r from-blue-600 via-blue-200 to-blue-600 p-2 m-4 font-bold">You have Added</div>
       <div className="  ">
          {mapCart}
         </div>
       </div>
    )
}