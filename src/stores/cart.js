import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        //Task 4: cart store here
        cart: [],
    }),
    actions: {
        //Task 4: write addToCart() function here
        addToCart(product) {
            const productExists =
                this.cart.filter((item) => item.id ===
                    product.id);

            if (productExists.length > 0) {
                this.addQty(product.id);
            } else {
                this.cart = [{
                    ...product, quantity: 1
                }, ...this.cart];
            }
        },
        //Task 6: write removeFromCart function here
        removeFromCart(id) {
            this.cart = this.cart.filter((item) =>
                item.id !== id);
        },
        //Task 7: write addQty function here
        addQty(id) {
            const productIndex =
                this.cart.findIndex((item) => item.id ===
                    id);

            this.cart = this.cart.map((item, i) => ({
                ...item,
                quantity: item.quantity + (productIndex
                    === i ? 1 : 0),
            }));
        },
        //Task 7: write reduceQty function here
        reduceQty(id) {
            const productIndex =
                this.cart.findIndex((item) => item.id ===
                    id);

            this.cart = this.cart.map((product, i) =>
            ({
                ...product,
                quantity:
                    product.quantity -
                    (productIndex === i &&
                        product.quantity > 1 ? 1 : 0),
            }));
        },
        // write emptyCart function here

    },
    getters: {
        //Task 7: write getter for total here
        total: (state) => {
            let _total = 0;
            for (const item of state.cart) {
                _total += item.price *
                    item.quantity;
            }
            return _total.toFixed(2);
        },
    },
});
