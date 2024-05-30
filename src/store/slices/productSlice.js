import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { prodAPI } from "../../api/api";


export const fetchProduct = createAsyncThunk(
    'fetchProduct',
    async (id,{dispatch})=>{
        const res = await prodAPI.getOne(id)
        return res.data
    }
)



const productSlice = createSlice({
    name:'productSlice',
    initialState:{
        product:{},
        isFalse : false
    },
    extraReducers:(builder)=>{
        builder.addCase (
            fetchProduct.pending,(state,action)=>{
                state.isFalse = true
            }
        )
        builder.addCase(
            fetchProduct.fulfilled,(state,action)=>{
                
                state.product=action.payload;
                state.isFalse=false
            }
        )
    }
})


export default productSlice.reducer