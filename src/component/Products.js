import { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { fetchProducts } from '../store/product-reducer'
import { addtoCart } from "../store/cart-reducer"




export default function Products(props){

  const products = useSelector((state) => {
    // console.log(state)
      return state.pr.products
    })

    const user = useSelector((state) => {
      // console.log(state)
        return state.au.auth
      })

    const dispatch = useDispatch();


    useEffect(() => {
      console.log('Init ... View Products .... ');
      dispatch(fetchProducts())
    }, [dispatch])
    // console.log("userrrr", user.userId);
      const userid = user.userId

    const addToCart=(item, userid)=>{
      dispatch(addtoCart(item,userid))
    }

     const card = products.map((item, index)=>{  return(<div className="p-4 m-4" >

     <div className="card border-2   rounded  shadow-2xl mb-12 p-2 w-72 " key={index}>
      <img  src={item.image} className="card-img-top h-80 w-72 bg-gray-400" alt="..."/>
      <div className="card-body text-center	">
        <h5 className="card-title mt-4 font-semibold text-2xl"> {item.title}</h5>
        <h7 className="card-text text-xl font-semibold mt-4 h-20 ">{item.category}</h7>
        
        <div className="mt-4 text-xl font-bold">Price:{item.price} Rs</div>
        
      </div>
      <div className="text-white flex justify-center text-semibold">
      {user.auth && <div class="button-section border-4 p-2 mt-2">
                    <button class="button text-xl font-black font-bold	" onClick={()=>addToCart(item, userid)}>Add to Cart</button>
                </div>}

      </div>
    </div>
      </div>)})

    return(<div>
      <div className="text-2xl flex justify-center bg-gradient-to-r from-blue-600 via-blue-200 to-blue-600 p-2 m-4 font-bold">Products Available</div>

      <div className="flex justify-center mb-20	">

      <div className="  grid grid-cols-3   gap-14    mt-8 justify-items-center">
     
     {card}


    </div>
    </div>
    </div>)
}