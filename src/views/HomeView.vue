<script>
import ProductsCategory from "../components/ProductsCategory.vue";

export default {
    name: "HomeView",
    components: {
        ProductsCategory,
    },
    data() {
        return {
            categories: [],
        };
    },
    mounted() {
        //Task 1: Write the call for getCategories here
        this.getCategories();
    },
    methods: {
        //Task 1: write getCategories() function here
        getCategories() {
            fetch(`https://fakestoreapi.com/products/categories`)
                .then((res) => res.json())
                .then((res) => (this.categories = res));
        },
    },
};
</script>

<template>
    <main>
        <h1 class="my-3 text-center text-3xl font-bold">Shop</h1>
        <div v-for="category in categories" :key="category">
            <ProductsCategory :category="category" show-more-btn />
        </div>
        <!--Task 1: populate the categories using ProductsCategory component -->
    </main>
</template>
