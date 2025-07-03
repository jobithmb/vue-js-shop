<template>
  <div class="product-view p-4" v-if="product">
    <div class="flex items-start justify-between gap-6">
        <div class="flex flex-col gap-4 w-1/2">
            <div class="rounded-lg bg-gray-100 mb-4">
                <img :src="currentThumbnail" alt="product" class="w-full h-auto object-cover">
            </div>
            <div class="flex items-center gap-4">
                <div v-for="(image, index) in product.images" :key="image" class="rounded-lg bg-gray-100 w-40 cursor-pointer hover:bg-gray-300" @click="thumbnailIndex = index">
                    <img :src="image" alt="product" class="w-full h-auto object-cover">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-4 w-1/2">
            <small>{{ product.category }}</small>
            <h1 class="text-2xl font-bold text-green-950">{{ product.title }}</h1>
            
            <div class="flex items-center gap-1">
                <div v-for="tag in product.tags" :key="tag" class="bg-gray-200 text-gray-800 rounded-lg px-2 py-1 text-xs">
                    {{ tag }}
                </div>
            </div>
            <div class="flex items-center gap-1">
                <div class="flex items-center gap-1">
                    <i v-for="i in stars" :key="i" class="ri-star-fill text-amber-300"></i>
                </div>
                <small class="text-gray-500">({{ product.reviews.length }})</small>
            </div>
            <p class="text-gray-500">{{ product.description }}</p>
            <div class="flex justify-between items-start mb-4 p-4 gap-4">
                <button class="ring-2 ring-green-900 text-white rounded-full w-full font-bold bg-green-900 p-4 cursor-pointer hover:bg-white hover:text-green-900 transition-all duration-300">
                    Buy Now
                </button>
                <button class="ring-2 ring-green-900 text-green-900 bg-white rounded-full w-full font-bold p-4 cursor-pointer hover:bg-green-900 hover:text-white transition-all duration-300">Add to Cart</button>
            </div>

            <div class="flex flex-col ring-1 ring-gray-200 rounded-lg">
                <div class="flex items-start gap-4 p-4 border-b-1 border-gray-200">
                    <i class="ri-truck-line text-xl text-amber-600"></i>
                    <div>
                        <div class="font-bold mb-2">
                            Free Delivery
                        </div> 
                        <input type="text" placeholder="Enter your pincode" class="w-full p-2 rounded-full ring-1 ring-gray-200 focus:ring-2 focus:ring-green-900">
                    </div>
                </div>
                <div class="flex items-start gap-4 p-4">
                    <i class="ri-archive-line text-xl text-amber-600"></i>
                    <div>
                        <div class="font-bold mb-2">
                            Return Delivery
                        </div>
                        <p>{{ product.returnPolicy }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useProductsStore } from '@/stores/products'

export default {
  name: 'ProductView',
  mounted() {
    this.fetchProduct(this.$route.params.id)
  },
  computed: {
    ...mapState(useProductsStore, ['product']),
    stars() {
      if (this.product.rating) {
        return parseInt(this.product.rating.toFixed(0));
      }
      
      return 0
    },
    currentThumbnail() {
        return this.product.images[this.thumbnailIndex]
    }
  },
  data () {
    return {
        thumbnailIndex: 0
    }
  },
  methods: {
    ...mapActions(useProductsStore, ['fetchProduct'])
  }
}
</script>
