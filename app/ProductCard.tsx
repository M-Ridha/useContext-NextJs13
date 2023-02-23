"use client"




import { Product } from "interfaces";
import React from "react";
import { useProductContext } from '../context/ProductContext';
import Swal from 'sweetalert2'
import { Button } from '../components/elements/Button'
import Link from "next/link";


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
        <div className="border shadow hover:shadow-md cursor-pointer transition rounded-md flex flex-col items-center justify-center gap-2 p-5">

            <span className="text-red-600 ml-11" onClick={deleteProd}> X </span>
            <p className="text-green-600 text-center text-lg">{product.name}</p>
            <p className="text-slate-500 text-center">{product.price} $</p>

            {/* <Link href={`/prod/${product.id}`}>
                <Button className="col-span-2 w-30 place-self-center">
                    See More
                </Button>
            </Link> */}

        </div>
    );
};

export default ProductCard;