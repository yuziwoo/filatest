import { type ProductProps } from '@/types/product'
import { Http } from '../https'

export const getProducts = async () => {
  const products = await Http.getWithoutClient<ProductProps[]>('src/data/products.json')

  return products
}
