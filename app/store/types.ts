import { FiltersProps } from "../components/filters/types"

export type StoreTypes = {
  filters: FiltersProps
  updateFilters: () => void
  addProducts: () => void
}