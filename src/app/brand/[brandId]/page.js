"use client"
import { UserContext } from '@/components/layout/Layout'
import ProductPage from '@/components/template/ProductPage'
import { brand } from '@/data/brand'
import { useParams } from 'next/navigation'
import React, { useContext } from 'react'

function page(props) {
  const  {params} = props


  const details = brand.filter((e) => e.userId === params.brandId)
  return (
    <ProductPage data={details}  />
  )
}

export default page