import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  // listiner to keep track of who is signed in

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {



      if (authUser) {
        // the user just logged in / was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])




  return (
    <div className="App">

      <BrowserRouter>



        <Routes>

          {/*  */}
          <Route path='/' element={<> <Header />   <Home /> </>} />

          {/*  */}
          <Route path='/checkout' element={<><Header /> <Checkout /></>} />

          {/*  */}
          <Route path='/login' element={<Login />} />

        </Routes>

      </BrowserRouter>

    </div >
  );
}

export default App;
