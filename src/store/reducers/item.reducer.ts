import { createSlice, PayloadAction, CaseReducer } from "@reduxjs/toolkit";

interface IItemSlice {
  items?: string;
}

const initialState: IItemSlice = {
  items: "test_1",
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    items: (state, action: PayloadAction<string>) => {
      state.items = action.payload;
    },
  },
});

export const { items } = itemSlice.actions;
export { itemSlice };

export default itemSlice.reducer;
