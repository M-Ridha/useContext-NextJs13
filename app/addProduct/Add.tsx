"use client"

import { useProductContext } from '@/context/ProductContext';
import React, { useState } from 'react'
import { Button } from "../../components/elements/Button";
import { TextBox } from '../../components/elements/TextBox'
import Swal from 'sweetalert2'
import Router from 'next/router';




const Add = () => {


    const [name, setName] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    {/*@ts-ignore*/}
    const {addProduct} = useProductContext()

    const add =  () => {
      addProduct({name , price})
      setPrice(0);
      setName('')
      setTimeout(()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'product added successfully',
            showConfirmButton: false,
            timer: 2500,
            width : "450px"
          })
    },0)

    }




    return (
        <div className="grid grid-cols-2 gap-2 p-2">
            <TextBox
                labelText="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <TextBox
                labelText="Price"
                onChange={(e) => setPrice(parseInt(e.target.value))}
                value={price}
            />
            <Button className="col-span-2 w-52 place-self-center" onClick={add}>
                Add
            </Button>
        </div>
    )
}

export default Add