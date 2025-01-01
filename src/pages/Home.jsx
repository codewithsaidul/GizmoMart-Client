// import { useState } from "react"
import Banner from "../components/Home/Banner"
import Category from "../components/Home/Category"
import ContactWIthUs from "../components/Home/ContactWIthUs"
import Faq from "../components/Home/Faq"
import FeaturedProducts from "../components/Home/FeaturedProducts"
import Testimonial from "../components/Home/Testimonial"
import LocationPopUp from "../components/Shared/LocationPopUp"
import useAuth from "../hooks/useAuth"
// import axios from "axios"


const Home = () => {

  const { address } = useAuth()

  return (
    <div className="relative">
      <Banner />

      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <Category />
        <FeaturedProducts />
        <Testimonial />
        <Faq />
        <ContactWIthUs />
      </div>

      <div className="px-4">
        {
          address && (
            <LocationPopUp />
          )
        }
      </div>
    </div>
  )
}

export default Home