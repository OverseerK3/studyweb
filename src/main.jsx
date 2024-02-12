import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Hero from './Components/SecongPage/Hero.jsx'
import Upload from './Components/UploadPage/Upload.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout/>} />
      <Route path='hero' element={<Hero />} />
      <Route path='about us/' element={<div>Under maintainance</div>} />
      <Route path='conatct us/' element={<div></div>}/>
      <Route path='hero/upload/' element={<Upload/>}></Route>
    </>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
