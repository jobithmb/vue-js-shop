<template>
    <div class="flex justify-between items-center p-4 px-6">
        <div class="flex items-center gap-5">
            <div class="flex items-center gap-2">
                <router-link to="/">
                    <img src="/shop.png" alt="logo" class="h-10">
                </router-link>
            </div>
            <div class="flex items-center gap-4">
                <router-link to="/categories" class="text-dark hover:text-green-950 bg-elevated rounded-full p-2 px-4 bg-green-950/10">
                    <span>Categories</span>
                    <i class="ri-arrow-down-s-line"></i>
                </router-link>
                <router-link to="/products" class="text-dark hover:text-green-950">
                    <span>Products</span>
                </router-link>
            </div>
        </div>
        <div class="flex items-center gap-5">
            <div class="flex items-center gap-2">
                <input type="text" placeholder="Search" class="border border-gray-300 rounded-full p-2 px-4 w-60">
            </div>
            <div class="flex items-center gap-2">
                <router-link to="/account" class="flex items-center gap-1">
                    <i class="ri-user-line"></i>
                    <span>Account</span>
                </router-link>
                <router-link class="flex items-center gap-1">
                    <i class="ri-shopping-cart-line"></i>
                    <span>Cart</span>
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>