<script setup lang="ts">
import { useProduct } from '@/composables/product/product'
import type { ProductProps } from '@/types/product'
import { ref, watch } from 'vue'

const products = ref<ProductProps[]>([])
const { isLoading, isError, products: productData, error, isFetching } = useProduct()

if (productData !== undefined) {
  watch(productData, (newData: ProductProps[]) => {
    products.value = newData
  })
}
</script>

<template>
  <div class="content">
    <h1>지금 많이 찾는 상품</h1>
    <p>{{ isLoading ? 'dd' : 'nn' }}</p>
    <p>{{ products }}</p>
    <img src="@/assets/img/item/item-1.jpg" alt="" />
  </div>
</template>

<style scoped>
.content {
  padding: 160px 20px 400px;
}
</style>
