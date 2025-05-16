/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { FiltersProps } from '../components/filters/types';
import { ProductTypes } from '../types';

export const useStore = create<any>((set) => {
  return {
    filters: {
      title: '',
      price_min: 0,
      price_max: 999999,
      sort_by: "",
      offset: 0,
      limit: 10
    },
    products: [],
    updateFilters: (filters: FiltersProps) => 
      set(() => {
        return {
          filters,
        };
      }),
    addProducts: (products: ProductTypes) =>
      set(() => {
        return {
          products
        }
      }) 
  }
})