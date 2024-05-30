import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import CustomizedBadges from './components/Header/Header'
import CartPage from './Pages/CartPage/CartPage'

function App() {
  const [num , setNum] = useState(0)
 
  return (
    <>
    <CustomizedBadges num={num}/>
      <Routes>
        <Route path='/' element={<Products num={num} setNum={setNum}/>}/>
        <Route path='/:id' element={<Product/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </>
  )
}

export default App
