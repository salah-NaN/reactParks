import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Home from './Home.jsx'
import Park from './Parks.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          {/* <Route path={`/park/:${nom}`} element={}/> */}
          <Route index element={<Home />} />
          <Route path='/parks/:nom' element={<Park />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
