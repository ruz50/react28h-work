import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { prodAPI } from "../../api/api";


export const fetchProd = createAsyncThunk(
    'fetchProd',
    async (id,{dispatch})=>{
        const res = await prodAPI.getAll(id)
        return res.data
    }
)



const prodSlice = createSlice({
    name:'prodSlice',
    initialState:{
        products:[],
        isFalse : false
    },
    extraReducers:(builder)=>{
        builder.addCase (
            fetchProd.pending,(state,action)=>{
                state.isFalse = true
            }
        )
        builder.addCase(
            fetchProd.fulfilled,(state,action)=>{
                
                state.products=action.payload;
                state.isFalse=false
            }
        )
    }
})


export default prodSlice.reducer

