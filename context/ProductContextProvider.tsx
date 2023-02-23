"use client"


import { Product } from '@/interfaces'
import React, { ReactNode, useState } from 'react'
import {ProductContext} from './ProductContext'
interface IProps {
    children : ReactNode
}



const ProductContextProvider = ({children} : IProps) => {
  
  const [products , setProducts] = useState<Product[]>([
    {name : "prodTest01" , price : 200 , id : 0} ,
    {name : "prodTest02" , price : 250 , id : 1} ,
  ])
  
  const addProduct = (product : Product) => {
    product.id = products.length;
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