<template>
    <div class="login flex justify-center items-center py-10">
        <form @submit.prevent="handleLogin" class="w-md block border border-gray-300 rounded-md shadow-sm p-4">
            <div class="mb-4 flex flex-col">
                <label for="email">Username</label>
                <input class="border border-gray-300 rounded-md shadow-sm p-2" type="text" v-model="username" required>
            </div>
            <div class="mb-4 flex flex-col">
                <label for="password">Password</label>
                <input class="border border-gray-300 rounded-md shadow-sm p-2" type="password" v-model="password" required>
            </div>
            <div class="flex justify-between">
                <button class="bg-green-800 hover:bg-green-950 text-white font-bold py-2 px-4 rounded-md">Login</button>
                <router-link to="/register" class="text-green-800 hover:text-green-950 font-bold py-2 px-4 rounded-md">Register</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { mapActions } from 'pinia'
export default {
    name: 'LoginView',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(useAuthStore, ['login']),
        handleLogin() {
            this.login(this.username, this.password)
        }
    }
}
</script>