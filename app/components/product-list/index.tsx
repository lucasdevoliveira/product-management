"use client";
import React from "react";
import * as T from "./types";
import Image from "next/image";
import { useStore } from "@/app/store";
import AddProduct from "../add-product";
import { ProductTypes } from "@/app/types";

const ProductList: React.FC<T.ProductsListProps> = () => {
  const store = useStore();
  const [showAddProductModal, setShowAddProductModal] = React.useState(false);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handlerItemsPerPage = (items: string) => {
    store.updateFilters({
      ...store.filters,
      limit: items,
    });
  };

  const handlerPrevPagination = () => {
    store.updateFilters({
      ...store.filters,
      offset: store.filters.offset - 1,
    });
  };

  const handlerNextPagination = () => {
    store.updateFilters({
      ...store.filters,
      offset: store.filters.offset + 1,
    });
  };

  return (
    <>
      {showAddProductModal && (
        <AddProduct onClose={() => setShowAddProductModal(false)} />
      )}
      <div className="px-4 flex gap-4 flex-col md:flex-row md:flex-wrap xl:container xl:m-auto pb-4">
        <button
          className="w-[200px] text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer mt-4 lg:mx-0 lg:my-0"
          type="submit"
          onClick={() => setShowAddProductModal(true)}
        >
          Adicionar Produto
        </button>
      </div>
      <div className="px-4 flex gap-4 flex-col md:flex-row md:flex-wrap xl:container xl:m-auto">
        {store.products.map((product: ProductTypes, index: number) => {
          if (!product.images[0].includes("imgur")) return;
          return (
            <div
              key={index}
              className="border-2 border-gray-50 p-2 rounded-sm flex gap-4 md:flex-col md:w-[172px] lg:w-[185px]"
            >
              <div className="flex items-center">
                <div className="w-[112px] h-[112px] relative md:w-[152px] md:h-[152px] lg:w-[165px] lg:h-[165px]">
                  <Image
                    className="rounded-sm"
                    src={product.images[0]}
                    alt="product"
                    fill={true}
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <p className="text-md font-semibold line-clamp-1">
                  {product.title}
                </p>
                <p className="text-sm my-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex gap-4 justify-between items-center">
                  <p className="rounded-sm px-2 py-1 bg-gray-100 text-sm font-semibold">
                    {product.category.name}
                  </p>
                  <p className="text-sm">{formatter.format(product.price)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-4 flex gap-4 flex-col md:flex-row md:flex-wrap xl:container xl:m-auto">
        <div className="border-2 border-gray-50 p-2 rounded-sm my-4 flex gap-4 items-end w-full justify-between">
          <div className="w-[120px]">
            <label className="text-sm">Itens por página:</label>
            <select
              name="sort_by"
              className="p-2 border-2 border-gray-200 rounded-sm w-full mt-1"
              defaultValue="10"
              onChange={(event) => handlerItemsPerPage(event.target.value)}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="flex gap-4 h-[43px] items-center">
            <p
              onClick={() => handlerPrevPagination()}
              className={`${store.filters.offset ? "" : "text-[#ccc]"}`}
            >
              Anterior
            </p>
            <p onClick={() => handlerNextPagination()}>Proximo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
