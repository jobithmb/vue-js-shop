import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    list: [],
    data: null
  }),
  getters: {
    categories: (state) => state.list,
    category: (state) => state.data,
  },
  actions: {
    fetchCategories() {
        fetch('https://dummyjson.com/categories')
            .then(res => res.json())
            .then((data)  =>{
              this.list = data.categories;
            });
    },
    fetchCategory(id) {
        fetch(`https://dummyjson.com/categories/${id}`)
            .then(res => res.json())
            .then((data) => {
                this.data = data;
            });
    }
  },
});
