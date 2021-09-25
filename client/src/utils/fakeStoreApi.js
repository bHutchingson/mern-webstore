/* eslint-disable import/no-anonymous-default-export */
const axios = require('axios');

export default {
  getAllProducts: function() {
    return axios.get('https://fakestoreapi.com/products?limit=100')
  },
  getAllCategories: function() {
    return axios.get('https://fakestoreapi.com/products/categories')
  }
}