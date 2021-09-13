import React, { useState, Dispatch, useEffect, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../store/store";
import { itemSlice } from "../store/reducers/item.reducer";

import Layout from "../components/Layout/Layout";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => {
    return state?.itemSlice?.items;
  });

  return (
    <div>
      <Layout title="KINGDOM" />
      <button
        onClick={() => {
          dispatch(itemSlice.actions.items("test_2"));
        }}
      >
        CLICK
      </button>
      <p>{data}</p>
    </div>
  );
};

export default Home;
