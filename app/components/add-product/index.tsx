import React from "react";
import * as T from "./types";
import { useFormik } from "formik";
import { addProducts } from "@/app/services";

const AddProduct: React.FC<T.AddProductProps> = ({ onClose }) => {
  const form = useFormik({
    initialValues: {
      title: "",
      categoryId: "",
      price: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      const payload = {
        ...values,
        categoryId: Number(values.categoryId),
        images: [values.image],
      };
      addProducts(payload)
        .then(() => {
          onClose();
        })
        .catch(() => {
          alert("Aconteceu algo errado");
        });
    },
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-10">
      <div className="w-[600px] h-auto bg-white rounded-sm p-4">
        <div>
          <p className="text-3xl font-semibold">Adicionar produto</p>
        </div>
        <div className="mt-4">
          <form className="flex flex-col gap-4" onSubmit={form.handleSubmit}>
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
              <label className="text-sm">Categoria:</label>
              <select
                name="categoryId"
                className="p-2 border-2 border-gray-200 rounded-sm w-full mt-1"
                onChange={form.handleChange}
              >
                <option value="0">Selecione uma categoria</option>
                <option value="1">Tennis</option>
                <option value="2">Camisas</option>
                <option value="3">Calças</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-sm">Preço:</label>
              <input
                className="p-2 border-2 border-gray-200 rounded-sm w-full mt-1"
                placeholder="Buscar por nome"
                name="price"
                type="number"
                value={form.values.price}
                onChange={form.handleChange}
              />
            </div>
            <div className="w-full">
              <label className="text-sm">Descrição:</label>
              <input
                className="p-2 border-2 border-gray-200 rounded-sm w-full mt-1"
                placeholder="Buscar por nome"
                name="description"
                type="text"
                value={form.values.description}
                onChange={form.handleChange}
              />
            </div>
            <div className="w-full">
              <label className="text-sm">URL da imagen:</label>
              <input
                className="p-2 border-2 border-gray-200 rounded-sm w-full mt-1"
                placeholder="Buscar por nome"
                name="image"
                type="text"
                value={form.values.image}
                onChange={form.handleChange}
              />
            </div>
            <div className="flex gap-4">
              <button
                className="w-full text-white bg-red-300 hover:bg-blue-400 focus:ring-4 font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer lg:mx-0 lg:my-0  "
                type="submit"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                className="w-full text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer lg:mx-0 lg:my-0  "
                type="submit"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
