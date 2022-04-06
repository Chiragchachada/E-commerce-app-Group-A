import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, fetchProducts } from '../store/product-reducer';

export default function AdminWork() {

    const products = useSelector((state) => {
      console.log(state)
        return state.pr.products
      })
  
      const dispatch = useDispatch();
  
  
      useEffect(() => {
        console.log('Init ... View Products .... ');
        dispatch(fetchProducts())
      }, [])
        

    const [title, setTitle]=useState("")
    const [price, setPrice]=useState()
    const [image, setImage]=useState("")

    const [category, setcategory]=useState("")

    const addprod =()=>{
      dispatch(addProduct({ title, category, image, price })) 
      setTitle('')
      setPrice(0)
      setImage('')
      setcategory('')
    }


    return (
    <div className='flex flex-col mb-40 pb-20 justify-center'>

        
            <h4 className='mt-2 text-xl font-bold'>Add Product</h4>

        <div className='flex mt-4 justify-center'>
        <div className='w-80'>
                
                <input
                  id="name"
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Product Name"
                />
                 <br/>

                 <input
                  id="name"
                  value={category}
                  onChange={(e)=>setcategory(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Product Category"
                />
                 <br/>
                 <input
                  id="name"
                  type="input"
                  value={image}
                  onChange={(e)=>setImage(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Product image Url"
                />
                 <br/>
                 <input
                  id="name"
                  value={price}
                  onChange={(e)=>setPrice(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Product Price"
                />
                 <div class="button-section border-4 rounded-3xl w-40 p-2   mt-4">
                    <button class="button text-xl font-black font-bold	" onClick={()=>addprod({ title, category, image, price })}>Add</button>
                </div>
              </div>
            
        </div>

        <div className='mt-8 text-xl font-bold'>Product List</div>
        <table className="w-full table-auto  ">
                    <tr className="border-2 rounded-xl ">
                        <th >Id</th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Product Price</th>
                        <th>Delete </th>
                    </tr>
                
                {products.map((item, index)=>{
                    return <tr className=" "><td>{item._id}</td>
                          <td>{item.title}</td>
                          <td>{item.category}</td>
                          <td>{item.price}</td>
                          <td><button className="border-2 p-2 font-semibold rounded-xl shadow-2xl bg-red-300 hover:bg-red-500"onClick={()=>dispatch(deleteProduct(item._id))} >Cancel</button></td>
                          </tr>

                    
                })}
                </table>
        

        <div>
            
        </div>

        



    </div>
  )
}
