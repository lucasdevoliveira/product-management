import api from "../api";

type PayloadProducts = {
  title?: string
  price_min?: number
  price_max?: number
  offset?: number
  limit?: number
}

export const getProducts = async (filters: PayloadProducts) => {
  const response = await api.get(`/products`, {
    params: filters
  })
  return response.data
}

export const addProducts = async (product: PayloadProducts) => {
  const response = await api.post(`/products`, product)
  return response.data
}