"use client"

import { useProductContext } from '@/context/ProductContext'
import Image from 'next/image'
import React, { FC } from 'react'
import styles from './page.module.scss'

interface pageProps {
  params: any
}



const page: FC<pageProps> = ({ params }) => {
  /* console.log("paramsfiOneProd",params.prodId) */

  const { products } = useProductContext()


  const oneProduct = products.find(elm => elm.id == params.prodId)

  /* console.log("oneProduct",oneProduct) */


  return (
    <div className={styles.page}>
      <Image src={oneProduct?.image}  loading="lazy" decoding="async" width={350} height={500} alt='product' />
      <div className={styles.elm}>
        <h1> {oneProduct?.name}   </h1>
        <h3> {oneProduct?.description} </h3>
        <h2> {oneProduct?.price} $ </h2>
      </div>


    </div>
  )
}

export default page