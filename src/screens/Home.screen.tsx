import React, { useState, Dispatch, useEffect, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../store/store";
import { itemSlice } from "../store/reducers/item.reducer";
import { apiGetItems } from "../api/get.api";

import Layout from "../components/Layout/Layout";
import Item from "../components/Item/Item";
import Button from "../components/Button/Button";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => {
    return state?.itemSlice?.items;
  });

  useEffect(() => {
    (async () => {
      const response = await apiGetItems();
      dispatch(itemSlice.actions.items(response));
    })();
  }, []);

  return (
    <div>
      <Layout title="KINGDOM">
        <Button
          title="Ajouter un nouveau manga"
          onClick={() => console.log("clicked")}
        />
        {data?.map((d) => {
          return <Item {...d} />;
        })}
      </Layout>
      {/* <button
        onClick={() => {
          dispatch(itemSlice.actions.items("test_2"));
        }}
      >
        CLICK
      </button>
      <p>{data}</p> */}
    </div>
  );
};

export default Home;
