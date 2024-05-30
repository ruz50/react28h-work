import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { fetchProduct } from "../../store/slices/productSlice"
import { useParams } from "react-router-dom"
import { fetchCart } from "../../store/slices/cartSlice"

const Product = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {product,isFalse} = useSelector((state)=>state.productData)
    useEffect(()=>{
        dispatch(fetchProduct(id))
        dispatch(fetchCart(id))
    },[])
  return (
    <div className="products">
        {
            isFalse?<h1>loading...</h1>:
                <div key={product.id} >
                    <div>{product.title}</div>
                    <img src={product.image} alt="" className="image" />
                </div>
            
        }

    </div>
  )
}

export default Product