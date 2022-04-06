import {createSlice} from '@reduxjs/toolkit'


const authReducer = createSlice({
    name: "auth",
    initialState: {auth: {} },
    reducers: {
      LOGIN(state, action){
        return {auth : action.payload};
      },
      LOGOUT(state, action){
        return {auth : false};
      },
      SIGN_UP(state, action){
        return {auth : action.payload};
      },
    }
  })

  export const {LOGIN, SIGN_UP, LOGOUT} = authReducer.actions
  export default authReducer.reducer


  const baseUrl = 'http://localhost:5000/user/'



  export const login = (user) => {
    return async(dispatch) => {
       
        let response = await fetch(baseUrl + 'login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        let data = await response.json();
        // console.log(data);

        if(data.token){
          localStorage.setItem('token', data.token)
        }
        // set token to local storage

        dispatch(LOGIN(data));

    }
}



export const singup = (user) => {
    return async(dispatch) => {
       
        let response = await fetch(baseUrl + "signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        let data = await response.json();
        if(data.token){
          localStorage.setItem('token', data.token)
        }
        // console.log(data);
        dispatch(SIGN_UP(data));
  
    }
  }

  export const logout = () =>{
    return async(dispatch)=>{
      localStorage.removeItem('token')
      dispatch(LOGOUT())
    }
  }





  export const adminLogin = (user) => {
    return async(dispatch) => {
       
        let response = await fetch(baseUrl + 'adminlogin', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(user)
        });
        let data = await response.json();
        console.log(data);

        if(data.token){
          localStorage.setItem('token', data.token)
        }
        // set token to local storage

        dispatch(LOGIN(data));

    }
}
