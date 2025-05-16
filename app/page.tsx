"use client";
import React, { useCallback, useEffect } from "react";
import { Header, Filters, ProductList } from "./components";
import { getProducts } from "./services";
import { useStore } from "./store";
import { FiltersTypes } from "./types";

const Home = () => {
  const store = useStore();

  const handlerGetProducts = useCallback(async (filters: FiltersTypes) => {
    const products = await getProducts(filters);
    store.addProducts(products);
  }, []);

  useEffect(() => {
    handlerGetProducts(store.filters);
  }, [store.filters]);

  return (
    <>
      <Header />
      <Filters />
      <ProductList />
    </>
  );
};

export default Home;
