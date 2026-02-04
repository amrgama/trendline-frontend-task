export interface Product {
  id: string
  name: string
  price: number
  description: string
  images: string[]
  category?: string
  rating?: number
  reviewCount?: number
  colors?: string[]
  discount?: number
}
