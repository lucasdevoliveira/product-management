export type FiltersTypes = {
  title: string,
  price_min: number,
  price_max: number,
  sort_by: string,
  offset: number,
  limit: number
}

export interface ProductTypes {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: CategoryTypes
  images: string[]
  creationAt: string
  updatedAt: string
}

export interface CategoryTypes {
  id: number
  name: string
  slug: string
  image: string
  creationAt: string
  updatedAt: string
}
