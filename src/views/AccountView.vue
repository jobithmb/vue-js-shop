<template>
  <div class="about">
    <h1>This is an account page</h1>
    <p>
        {{ user }}
    </p>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { mapActions, mapState } from 'pinia'
export default {
    name: 'AccountView',
    computed: {
        ...mapState(useAuthStore, ['user'])
    },
    methods: {
        ...mapActions(useAuthStore, ['fetchUser'])
    }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
