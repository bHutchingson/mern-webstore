import React from 'react'

const ProductCard = (props) => {
  const truncateDesc = (str) => {
    return str.length > 30 ? str.substring(0, 100) + "..." : str;
  }

  const truncateTitle = (str) => {
    return str.length > 20 ? str.substring(0, 22) + "..." : str;
  }

  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
      <div class="container mx-auto">
        <div class=" h-3/4 flex flex-wrap -mx-4">
          <div class=" sm:w-1/2 md:w-3/4 xl:w-3/4 w-full p-4">
            <a href="/" class="c-card block w-full bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src={props.image} alt="" />
              </div>
              <div class="p-4">
                <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{props.category}</span>
                <h2 class="mt-2 mb-2  font-bold">{truncateTitle(props.title)}</h2>
                <p class="text-sm">{truncateDesc(props.description)}</p>
                <div class="mt-3 flex items-center">
                  <span class="text-sm font-semibold">$</span>&nbsp;<span class="font-bold text-xl">{props.price}</span>&nbsp;
                </div>
              </div>
              {/* <div class="p-4 border-t border-b text-xs text-gray-700">
                <span class="flex items-center mb-1">
                  <i class="far fa-clock fa-fw mr-2 text-gray-900"></i>
                </span>
                <span class="flex items-center">
                  <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>
                </span>
              </div>
              <div class="p-4 flex items-center text-sm text-gray-600"><span class="ml-2"></span></div> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
