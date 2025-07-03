<template>
  <div class="min-h-screen min-w-screen">
    <TopBar />
    <Navbar />
    <router-view class="p-4"/>
  </div>
</template>

<script>
import TopBar from '@/components/Nav/TopBar.vue'
import Navbar from '@/components/Nav/Navbar.vue'
export default {
  name: 'App',
  components: {
    TopBar,
    Navbar
  }
}
</script>
