import React from 'react'
import HomePageCarousel from '../components/HomePageCarousel'
import Products from '../components/Products'
import WelcomeSection from '../components/WelcomeSection'

const page = () => {
  return (
    <div>
        <HomePageCarousel/>
        <WelcomeSection/>
        <Products/>
    </div>
  )
}

export default page