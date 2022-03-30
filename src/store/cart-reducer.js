import {createSlice} from '@reduxjs/toolkit'
import globalFetch from '../Addon/globalfetch';


const cartReducer = createSlice({
  name: "cart",
  initialState: {cart: [
  ]},
  reducers: {
    FETCH_CART(state, action){
      return {cart : action.payload};
    },
    ADD_TO_CART(state, action){
      let newCart = [...state.cart, action.payload]
      return {cart: newCart};
    },
    DELETE_FROM_CART(state,action){
      let newCart = state.cart.filter(e => e._id != action.payload.id)
      return {cart: newCart};
    }
  }
})

export const {FETCH_CART, ADD_TO_CART, DELETE_FROM_CART} = cartReducer.actions
export default cartReducer.reducer



const baseUrl = 'http://localhost:5000/cart/'

// export const fetchCart = () => {
//   return async(dispatch) => {
//       let response = await globalFetch(baseUrl, "GET" );
//       console.log("res", response);
//       let data =  response.json();
//       dispatch(FETCH_CART(data));

//   }
// }

export const fetchCart = () => {
  return async(dispatch) => {
      let response = await fetch(baseUrl);
      let data = await response.json();
      dispatch(FETCH_CART(data));

  }
}




export const addtoCart = (product) => {
  return async(dispatch) => {
     
      let response = await fetch(baseUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({product:product})
      });
      let data = await response.json();
      console.log(data);
      dispatch(ADD_TO_CART(product));

  }
}
// 


export const deleteFromCart = (id) => {
  // http communication
  console.log(id);
  
  return dispatch=> {
      fetch( baseUrl + id, {
          method: 'DELETE'
      })
        .then(response => response.json()) 
        .then(json => {
            console.log("jsonhere",json);
            dispatch(DELETE_FROM_CART({id}));
        })
        .catch(err => console.log(err));
  }
  // return {type: DELETE_EMPLOYEE, payload: {id}} 
}