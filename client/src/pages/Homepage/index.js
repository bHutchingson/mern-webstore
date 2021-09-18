import { React, useEffect, useState } from 'react'
import ProductCard from '../../components/productCard'
import API from '../../utils/fakeStoreApi'

const Homepage = () => {
  let [products, setProducts] = useState([]);

  const getAllProducts = () => {
    API.getAllProducts()
    .then((res) => {
      setProducts(res.data);
      console.log('products: ' + products)
    })
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  return (
    <>
      {products.map(product => {
          console.log(product)
              return (
                <div className="col my-2">
                  <ProductCard
                  image={product.image}
                  category={product.category}
                  title={product.title}
                  description={product.description}
                  price={product.price} 
                  />
                </div>
              )
      })}
    </>
  )
}

export default Homepage
