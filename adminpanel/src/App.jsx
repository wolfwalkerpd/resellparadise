import { useState } from 'react'
import './App.css'
import Home from './home/home'
import Users from './Users/user'
import { BrowserRouter,Routes,Route,Router } from 'react-router-dom'
import Edit from './edit/edit'
import Orders from './Orders/Orders'
import AdminOrders from './admin-orders/admin-orders'
import AddCategory from './add-category/add-category'
import AddProduct from './add-product/add-product'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path='/users/Edit' element={<Edit />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Orders/admin" element={<AdminOrders />} />
        <Route path="/category" element={<AddCategory />} />
        <Route path="/Product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
