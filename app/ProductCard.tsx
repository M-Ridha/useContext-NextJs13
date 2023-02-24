"use client"




import { Product } from "interfaces";
import React from "react";
import { useProductContext } from '../context/ProductContext';
import Swal from 'sweetalert2'
import { ButtonPro } from '../components/elements/Button'
import Link from "next/link";
import Image from "next/image";


interface IProps {
    product: Product;
}



const ProductCard = ({ product }: IProps) => {

    const { deleteProduct } = useProductContext()

    const deleteProd = () => {
        {/*@ts-ignore*/ }
        deleteProduct(product.id)
        setTimeout(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'product deleted successfully',
                showConfirmButton: false,
                timer: 2500,
                width: "450px"
            })
        }, 0)
    }   

    

    return (
        <div className=" flex flex-col items-center justify-center gap-2 p-5 ">
            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <span className="text-red-600 m-1 cursor-pointer" onClick={deleteProd}> X </span>
                <a href="/">
                    {/* <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" /> */}
                    <Image src={product.image} loading="lazy" decoding="async" width={550} height={500} alt='product' />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price} $</p>
                    <Link href={`/${product.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div> 

            


        </div>
    );
};

export default ProductCard;