<template>
    <div class="top-bar flex justify-between items-center bg-green-900 text-white p-2 px-6">
      <div class="flex items-center gap-1">
        <i class="ri-phone-line"></i>
        <a href="tel:+1234567890">+123 456 7890</a>
      </div>
      <div class="flex items-center gap-2">
        <span>Free shipping on orders over $100</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1">
          <span>English</span>
          <i class="ri-arrow-down-s-line"></i>
        </div>
        <div class="flex items-center gap-1">
          <span>USD</span>
          <i class="ri-arrow-down-s-line"></i>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar'
}
</script>