"use client"


import { Product } from '@/interfaces'
import React, { ReactNode, useState } from 'react'
import {ProductContext} from './ProductContext'
import { v4 as uuidv4 } from 'uuid'



interface IProps {
    children : ReactNode
}



const ProductContextProvider = ({children} : IProps) => {
  
  const [products , setProducts] = useState<Product[]>([
    {name : "prodTest01" , price : 200 , id : "0" , description:"description 0" , image : "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" },
    {name : "prodTest02" , price : 250 , id : "1" , description:"description 1" , image : "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"} 
  ])
  
  const addProduct = (product : Product) => {
    product.id = uuidv4();
    setProducts([...products , product])
  }
  {/*@ts-ignore*/}

  const deleteProduct = (id) => {
    let filtredProd = products.filter(elm => elm.id !== id)
    setProducts(filtredProd)
  }
  
  return (
    <ProductContext.Provider value={{products,addProduct , deleteProduct}}>
         {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider