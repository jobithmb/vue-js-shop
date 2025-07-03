<template>
  <router-link :to="`/product/${id}`" class="flex flex-col justify-between rounded-lg hover:shadow-lg hover:bg-green-50 transition-all duration-300">
    <div class=" rounded-lg bg-gray-100 mb-4">
      <img :src="thumbnail" alt="product" class="w-full h-auto object-cover">
    </div>
    <div class="flex justify-between items-start mb-4 p-4">
      <div class="text-left w-[70%]">
        <h3 class="text-lg font-bold text-green-950 mb-2 min-h-15">{{ title }}</h3>
        <div class="flex items-center gap-1">
          <div v-for="tag in tags" :key="tag" class="bg-gray-200 text-gray-800 rounded-lg px-2 py-1 text-xs">
            {{ tag }}
          </div>
        </div>
      </div>
      <div class="text-right w-[30%] text-lg font-bold text-green-800">$ {{ price }}</div>
    </div>

    <div class="flex items-center mb-4 p-4">
      <div class="flex items-center gap-1">
        <i v-for="i in stars" :key="i" class="ri-star-fill text-amber-300"></i>
      </div>
      <small v-if="reviews" class="text-gray-500 ml-2">({{ reviews.length }})</small>
    </div>

    <button class="ring-2 ring-green-900 text-white px-4 py-2 rounded-full w-full mt-4 font-bold bg-green-800">
      Add to Cart
    </button>
  </router-link>
</template>

<script>
export default {
  name: 'Product',
  props: {
    id: Number,
    title: String,
    description: String,
    tags: Array,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    reviews: Array,
    thumbnail: String,
    images: Array
  },
  computed: {
    stars() {
      if (this.rating) {
        return parseInt(this.rating.toFixed(0));
      }
      
      return 0
    }
  }
}
</script>