import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";

import "./School.css";
import Navbar from './Navbar';
import Footer from './Footer'
import Home from './Home';
import Regastationupload from './Regastationupload'
import Resultupload from './Resultupload';
import Newnotificationupload from './Newnotificationupload';
import Newadmition from './Newadmition';

function School() {
  return (
    <div className='School_contaner'>
        {/* <Navbar />
        <Home /> */}

        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/registerupload' element={<Regastationupload />}/>
          <Route path='/resultupload' element={<Resultupload />}/>
          <Route path='/newnotification' element={<Newnotificationupload/>}/>
          <Route path='/newadmition' element={<Newadmition />} />
          {/* <Route path='/randomcolor' element={<RandomColor/>} />
          <Route path='/counter' element={<Counter/>} />
          <Route path='/todolist' element={<Todolist/>} />
          <Route path='/report' element={<Report/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Regester' element={<Formvalidation/>} />
          <Route path='/forget' element={<Forget/>} />
           */}
        </Routes>
      </BrowserRouter>

        <Footer />
    </div>
  )
}

export default School
