import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    subtotal: 0,
    tax: 0,
  },
  reducers: {
    add: (state, action) => {
      const item = {
        ...action.payload,
        count: 1,
      }
      state.items.push(item)
      state.subtotal += item.price
      state.tax += 0.0975;
    },
    remove: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      state.items = state.items.filter((i) => i.id !== action.payload);
      state.subtotal -= item.price * item.count;
      state.tax -= 0.0975 * item.count;
    },
    increaseCount: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      state.items.map((i) => {
        if(i.id === action.payload) {
          i.count++
        }
      });
      state.subtotal += item.price;
      state.tax += 0.0975;
    },
    decreaseCount: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);

      state.items.map((i) => {
        if(i.id === action.payload) {
          i.count--
        }
      });
      state.subtotal -= item.price;
      state.tax -= 0.0975;
    }
  },
});

export const { add, remove, increaseCount, decreaseCount } = cartSlice.actions;

export default cartSlice.reducer;
