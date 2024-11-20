import Banner from "../components/Home/Banner"
import Category from "../components/Home/Category"
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
      </div>
    </div>
  )
}

export default Home