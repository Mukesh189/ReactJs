import React from 'react'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Component/Header';
import Index from './Pages/Index';
import Footer from './Component/Footer';

import Contact from './Pages/Contact'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Men_cloths from './Pages/Men_cloths';
import Women_cloths from './Pages/Women_cloths';
import Camera from './Pages/Camera';
import Shoes from './Pages/Shoes'
function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer></ToastContainer>
    <Routes>
      <Route path='/'index element={<><Header/><Index/><Footer/></>}></Route>
      <Route path='/mencloths' element={<><Header/><Men_cloths/><Footer/></>}></Route>
      <Route path='/womencloths' element={<><Header/><Women_cloths/><Footer/></>}></Route>
      <Route path='/camera' element={<><Header/><Camera/><Footer/></>}></Route>
      <Route path='/shoes' element={<><Header/><Shoes/><Footer/></>}></Route>
      <Route path='/cream' element={<><Header/><Shoes/><Footer/></>}></Route>
      <Route path='/contact' element={<><Header/><Contact/><Footer/></>}></Route>
      <Route path='/login' element={<><Login/></>}></Route>
      <Route path='/signup' element={<><Signup/></>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App