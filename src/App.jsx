import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useContext, useEffect, useState } from 'react';
import MyRoutes from './components/MyRoutes';
import { GlobalContext } from './context/Context';
import api from './components/api';

const  App = () =>  {

   // data store in a context api
 let {state , dispatch} = useContext(GlobalContext);



const checkLogin = async () => {

  try{
    let response = await api.get(`/admin_details`)
    
    dispatch({ type: "ADMIN_LOGIN", payload: response.data.user });
    console.log(response);
  }
  catch(error){
      dispatch({type: "USER_LOGOUT"});
  }
}

useEffect(() => {
  // checkLogin()
},[])


  return (
   <div >
      <Navbar/>
      <MyRoutes/>
      <Footer/>
    </div>




  );
}

export default App;
