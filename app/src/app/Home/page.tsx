import BestProductsSection from '@/components/BestProductsSection'
import HomePageCarousel from '@/components/HomePageCarousel'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col'>
      <HomePageCarousel/>
      <BestProductsSection/>
    </div>
  )
}

export default page