<template>
    <div class="banner bg-amber-100 rounded-lg p-4 px-6 pb-0 w-full h-96 flex items-center justify-between">
      <div class="banner-content flex flex-col gap-4">
        <h1 class="text-6xl font-bold text-green-950">Welcome to our store</h1>
        <p class="text-2xl">We offer a wide range of products for you to choose from</p>
        <router-link to="/products" class="bg-green-950 text-white px-4 py-2 rounded-full w-fit">Shop Now</router-link>
      </div>
      <div class="banner-image h-full w-auto">
        <img src="@/assets/images/banner.png" alt="banner" class="h-full w-auto object-cover">
      </div>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>