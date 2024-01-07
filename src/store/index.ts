import { createStore, Store } from 'vuex';
import { Product } from '../interfaces/interfaces';
import axios from 'axios';

interface CreateStorePropertiesInterface {
  state: { products: Product[] | null; cart: Product[] };
  mutations: undefined | {};
  actions: undefined | {};
  modules: undefined | {};
}

const createStoreProperties: CreateStorePropertiesInterface = {
  //State is like the data propertie we create on components, here we will have all the state shared through our application
  state: {
    products: null,
    cart: [],
  },
  mutations: {
    loadProducts(
      state: CreateStorePropertiesInterface['state'],
      products: Product[]
    ): void {
      console.log('state', state);
      state.products = products;
    },

    addToCart(
      state: CreateStorePropertiesInterface['state'],
      product: Product
    ) {
      Object.assign(product, { quantity: 1 });
      console.log('add product', product);
      state.cart.push(product);
    },

    removeFromCart(
      state: CreateStorePropertiesInterface['state'],
      product: Product
    ) {
      console.log('remove from cart', product);
      state.cart = state.cart.filter(
        (cartProduct) => cartProduct.id !== product.id
      );
    },
  },
  actions: {
    async loadProducts({ commit }: { commit: Function }): Promise<void> {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      console.log(data);

      //We use the commit keyword to call a mutation
      commit('loadProducts', data);
    },

    addToCart({ commit }: { commit: Function }, product: Product): void {
      commit('addToCart', product);
    },

    removeFromCart({ commit }: { commit: Function }, product: Product): void {
      commit('removeFromCart', product);
    },
  },
  modules: {},
};
//here we will have all the state shared through our application - Single source of truth with vuex
export default createStore(createStoreProperties);
