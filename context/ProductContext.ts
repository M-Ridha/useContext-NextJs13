
import { Product } from "@/interfaces";
import { createContext, useContext } from "react";

interface IProductContext {
    products : Product[];
    addProduct : (product : Product) => void ;
    deleteProduct : (id : number)=> void
}


{/*@ts-ignore*/}

export const ProductContext = createContext<IProductContext>({
   products : [] ,
   addProduct(product){} ,
   deleteProduct(id) {}
})


export const useProductContext = () => useContext(ProductContext)