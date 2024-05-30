import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { fetchCart } from "../../store/slices/cartSlice"
import { NavLink } from "react-router-dom"


const Cart = () => {

    const dispatch = useDispatch()
    const {cart,isFalse} = useSelector((state)=>state.cartData)
    useEffect(()=>{
        dispatch(fetchCart())
    },[])
  return (
    <div className="products">
        {
            isFalse?<h1>loading...</h1>:
                cart.map((el)=>{
                    return <div key={el.id}>
                        <NavLink to={`/${el.id}`} >{el.title}</NavLink>
                        <img src={el.image} alt="" />
                        </div>
                })
            
        }

    </div>
  )
}

export default Cart