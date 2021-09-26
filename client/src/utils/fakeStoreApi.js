/* eslint-disable import/no-anonymous-default-export */
const axios = require('axios');

export default {
  getAllProducts: function() {
    return axios.get('https://fakestoreapi.com/products?limit=100')
  },
  getAllCategories: function() {
    return axios.get('https://fakestoreapi.com/products/categories')
  },
  getOneCategory: function(category) {
    return axios.get(`https://fakestoreapi.com/products/category/${category}`)
  },
  getOneProduct: function(product) {
    return axios.get(`https://fakestoreapi.com/products/${product}`)
  }
}