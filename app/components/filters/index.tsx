/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import * as T from "./types";
import { useFormik } from "formik";
import { getProducts } from "@/app/services";
import { useStore } from "@/app/store";

const Filters: React.FC<T.FiltersProps> = () => {
  const store = useStore();

  const handlerSortBy = (products: any, sort_by: string) => {
    switch (sort_by) {
      case "price_min": {
        return products.sort((a: any, b: any) => a.price - b.price);
      }
      case "price_max": {
        return products.sort((a: any, b: any) => b.price - a.price);
      }
    }
  };

  const form = useFormik({
    initialValues: {
      title: "",
      price_min: 0,
      price_max: 999999,
      sort_by: "",
      offset: 0,
      limit: 10,
    },
    onSubmit: async (filters) => {
      let response = await getProducts(filters);
      if (filters.sort_by) {
        response = handlerSortBy(response, filters.sort_by);
      }
      store.addProducts(response);
    },
  });

  return (
    <div className="p-4 xl:container xl:m-auto">
      <form
        onSubmit={form.handleSubmit}
        className="p-2 flex border-2 border-gray-50 mb-4 gap-4 rounded-sm flex-col"
      >
        <p className="font-semibold text-lg">Filtros:</p>
        <div className="flex gap-2 flex-col xl:flex-row xl:items-end xl:gap-4">
          <div className="w-full">
            <label className="text-sm">Titulo:</label>
            <input
              className="p-2 border-2 border-gray-200 rounded-sm w-full mt-1"
              placeholder="Buscar por nome"
              name="title"
              type="text"
              value={form.values.title}
              onChange={form.handleChange}
            />
          </div>
          <div className="w-full">
            <label className="text-sm">Valor minimo:</label>
            <input
              className="p-2 border-2 border-gray-200 rounded-sm w-full mt-1"
              placeholder="Buscar por nome"
              name="price_min"
              type="number"
              value={form.values.price_min}
              onChange={form.handleChange}
            />
          </div>
          <div className="w-full">
            <label className="text-sm">Valor maximo:</label>
            <input
              className="p-2 border-2 border-gray-200 rounded-sm w-full mt-1"
              placeholder="Buscar por nome"
              name="price_max"
              type="number"
              value={form.values.price_max}
              onChange={form.handleChange}
            />
          </div>
          <div className="w-full">
            <label className="text-sm">Ordenação:</label>
            <select
              name="sort_by"
              className="p-2 border-2 border-gray-200 rounded-sm w-full mt-1"
              onChange={form.handleChange}
              defaultValue=""
            >
              <option value="">Selecione uma opção</option>
              <option value="price_max">Maior valor</option>
              <option value="price_min">Menor valor</option>
            </select>
          </div>
          <button
            className="w-full text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer mt-4 lg:mx-0 lg:my-0  "
            type="submit"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
