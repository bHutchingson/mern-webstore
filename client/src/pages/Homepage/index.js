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
    <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
      <div class="container mx-auto">
        <div class="grid -mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(product => {
            console.log(product)
            return (
              <div className="col my-2 ">
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
        </div>
      </div>
    </div>
  )
}

export default Homepage
