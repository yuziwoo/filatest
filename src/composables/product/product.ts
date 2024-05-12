import { getProducts } from '@/api/products/getProducts'
import { queryAPI } from '@/constants/query'
import type { ProductProps } from '@/types/product'
import type { AxiosResponse } from 'axios'
import { useQuery } from 'vue-query'

export const useProduct = () => {
  /**
   * product 리스트를 가져오는 API
   */

  const queryKey = [queryAPI.queryKey.PRODUCT]
  const productQuery = () => useQuery<AxiosResponse<ProductProps[]>>(queryKey, getProducts)
  const { isLoading, isError, data, error, isFetching } = productQuery()
  const products: ProductProps[] | undefined = data

  return { isLoading, isError, products, error, isFetching }
}
