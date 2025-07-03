<template>
  <div class="home-view">
    <Banner />
    <div class="grid grid-cols-4 gap-4 p-4">
        <Product 
          v-for="product in products" 
          :key="product.id" 
          v-bind="product"
        />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Product from '@/components/Cards/Product.vue'

import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useProductsStore } from '@/stores/products'

export default {
  name: 'HomeView',
  components: {
    Banner,
    Product
  },
  mounted() {
    this.fetchProducts()
  },
  computed: {
    ...mapState(useProductsStore, ['products'])
  },
  methods: {
    ...mapActions(useProductsStore, ['fetchProducts'])
  }
}
</script>
