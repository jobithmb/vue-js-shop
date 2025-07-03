import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    list: [],
    data: null
  }),
  getters: {
    products: (state) => state.list,
    product: (state) => state.data,
  },
  actions: {
    fetchProducts() {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data)  =>{
              this.list = data.products;
            });
    },
    fetchProduct(id) {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
              this.data = data;
            });
    }
  },
});
