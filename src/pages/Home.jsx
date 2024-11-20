import Banner from "../components/Home/Banner"
import Category from "../components/Home/Category"
import ContactWIthUs from "../components/Home/ContactWIthUs"
import Faq from "../components/Home/Faq"
import FeaturedProducts from "../components/Home/FeaturedProducts"
import Testimonial from "../components/Home/Testimonial"


const Home = () => {
  return (
    <div>
      <Banner />

      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <Category />
        <FeaturedProducts />
        <Testimonial />
        <Faq />
        <ContactWIthUs />
      </div>
    </div>
  )
}

export default Home