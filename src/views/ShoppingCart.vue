<!-- @format -->

<template>
  <div v-if="cart.length == 0">no items</div>
  <div
    v-if="cart.length > 0"
    class="basket">
    <div
      v-for="product in cart"
      :key="product.id"
      class="items">
      <div class="item">
        <div
          @click="this.removeFromCart(product)"
          class="remove">
          Remove item
        </div>
        <div class="photo">
          <img
            :src="product.image"
            alt="" />
        </div>
        <div class="description">
          {{ product.title }}
        </div>
        <div class="price">
          <span class="quantity-area">
            <button
              @click="product.quantity--"
              :disabled="product.quantity == 1">
              -
            </button>
            <span class="quantity">{{ product.quantity }}</span>
            <button @click="product.quantity++">+</button>
          </span>
          <span class="amount">{{
            (product.price * product.quantity).toFixed(2)
          }}</span>
        </div>
      </div>
    </div>
    <div class="grand-total">Grand Total: US$ 22.30</div>
  </div>
</template>

<script lang="ts">
  import { mapState } from 'vuex';
  import { Product } from '../interfaces/interfaces';

  export default {
    name: 'ShoppingCart',

    computed: mapState(['cart']),

    methods: {
      removeFromCart(product: Product) {
        this.$store.dispatch('removeFromCart', product);
      },
    },
  };
</script>

<style lang="scss">
  .basket {
    padding: 60px 0;
    .grand-total {
      font-size: 24px;
      font-weight: bold;
      text-align: right;
      margin-top: 8px;
    }
    .items {
      max-width: 800px;
      margin: auto;
      .item {
        display: flex;
        justify-content: space-between;
        padding: 40px 0;
        border-bottom: 1px solid lightgrey;
        position: relative;

        .remove {
          position: absolute;
          top: 8px;
          right: 0;
          font-size: 11px;
          text-decoration: underline;
          cursor: pointer;
        }

        .quantity-area {
          margin: 8px auto;
          height: 14px;

          button {
            width: 16px;
            height: 16px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }

          .quantity {
            margin: 0 4px;
          }
        }

        .photo {
          img {
            max-width: 80px;
          }
        }

        .description {
          padding-left: 30px;
          box-sizing: border-box;
          max-width: 50%;
        }

        .price {
          .amount {
            font-size: 16px;
            margin-left: 8px;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
