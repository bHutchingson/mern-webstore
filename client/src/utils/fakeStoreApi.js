/* eslint-disable import/no-anonymous-default-export */
const axios = require('axios');

export default {
  getAllProducts: function() {
    return axios.get('https://fakestoreapi.com/products?limit=10')
    .then(res=>res.json())
    .then(json=>console.log(json))
  }
}