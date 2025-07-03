import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userData: null,
    userTokens: null,
    isAuthenticated: false,
  }),
  getters: {
    user: (state) => state.userData,
    token: (state) => state.userTokens,
  },
  actions: {
    login(username, password) {
      console.log("auth-login", { username, password });
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 30, // optional, defaults to 60
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          let { accessToken, refreshToken } = data;
          this.userTokens = { accessToken, refreshToken };
          this.isAuthenticated = true;
          this.fetUserDetails();
          this.router.push("/account");
        });
    },
    fetUserDetails() {
      /* providing accessToken in bearer */
      fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.userTokens.accessToken}`, 
        }
      })
        .then((res) => res.json())
        .then(data => {
            this.userData = data
        });
    },
  },
});
