import { createSlice, PayloadAction, CaseReducer } from "@reduxjs/toolkit";

interface IItemSlice {
  items?: [];
}

const initialState: IItemSlice = {
  items: [],
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    items: (state, action: PayloadAction<[]>) => {
      state.items = action.payload;
    },
  },
});

export const { items } = itemSlice.actions;
export { itemSlice };

export default itemSlice.reducer;
