<!-- @format -->

<template>
  <div class="home">
    aaaaa
    <div class="products">
      <div
        :class="{ inBag: this.isInCart(product) }"
        v-for="product in this.products"
        :key="product.id"
        class="product">
        <div
          class="product-image"
          :style="{ backgroundImage: `url(${product.image})` }"></div>
        <h4>{{ product.name }}</h4>
        <p class="price">${{ product.price.toFixed(2) }}</p>
        <button
          v-if="!this.isInCart(product)"
          @click="this.addToCart(product)">
          Add to bag
        </button>
        <button
          @click="this.removeFromCart(product)"
          class="remove"
          v-if="this.isInCart(product)">
          Remove from cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Product } from '../interfaces/interfaces';
  export default {
    name: 'HomePage',

    computed: {
      products() {
        return this.$store.state.products;
      },

      cart() {
        return this.$store.state.cart;
      },
    },

    methods: {
      addToCart(product: Product) {
        this.$store.dispatch('addToCart', product);
      },
      removeFromCart(product: Product) {
        this.$store.dispatch('removeFromCart', product);
      },
      isInCart(product: Product) {
        const productInCart = this.$store.state.cart.includes(product);
        return productInCart;
      },
    },
  };
</script>

<style lang="scss">
  .home {
    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .product {
        flex: 0 0 30%;
        box-sizing: border-box;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        margin: 8px;
        height: 360px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inBag {
          border: 1px solid #007bff;
        }

        .product-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4 {
          margin: 22px auto;
          font-size: 12px;
          max-width: 60%;
          font-weight: normal;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
        }

        button {
          color: #fff;
          background-color: #007bff;
          border: 1px solid #007bff;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &.remove {
            background-color: transparent;
            border: none;
            color: black;
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
