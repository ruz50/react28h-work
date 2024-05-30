import React from 'react'
import Cart from '../../components/Cart/Cart'
import { NavLink } from 'react-router-dom'

const CartPage = () => {
  return (
    <div><div>
    <Cart/>
    <NavLink to={`/`}>Back main </NavLink>
    </div></div>
  )
}

export default CartPage