import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { fetchProd } from "../../store/slices/productsSlice"
import './Products.css'
import { NavLink } from "react-router-dom"
import { fetchCart } from "../../store/slices/cartSlice"
import { prodAPI } from "../../api/api"

const Products = ({num,setNum}) => {
    const dispatch = useDispatch()
    
    const {products,isFalse} = useSelector((state)=>state.prodData)
    useEffect(()=>{
        dispatch(fetchProd())
        
    },[])
    const addToCart = (id) =>{
        setNum(num + 1)
        dispatch(fetchCart(id))
    }
    
  return (
    <div className="products">
        {
            isFalse?<h1>loading...</h1>:products.map((el)=>{
                return <div key={el.id} >
                    <NavLink to={`/${el.id}`}>{el.title}</NavLink>
                    <img src={el.image} alt=""  />
                    <button onClick={()=>addToCart(el.id)}>add to cart</button>
                </div>
            })
        }

    </div>
  )
}

export default Products