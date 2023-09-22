import React from "react";
import { BrowserRouter,Route,Routes, NavLink, Navigate } from 'react-router-dom'


export default function router4() {
  return (
<Routes style = {{margin: '20px'}}>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/products" element={<Products/>}/>
    <Route path ="/member" Component={Member}/>
    <Route path ="/contact" Component={Contact}/>
    <Route path = "/*" element={<Navigate to ="/"/>}/>
</Routes>
  )
}