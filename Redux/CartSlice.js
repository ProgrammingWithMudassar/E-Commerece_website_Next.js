import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // cartItem: localStorage.getItem("Item") ? JSON.parse(localStorage.getItem("Item")) : [null],
    cartItem: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

export const counterCartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToCart(state, action) {
          state.cartItem.push(action.payload);
            },
    }
})

export const { addToCart } = counterCartSlice.actions

export default counterCartSlice.reducer

