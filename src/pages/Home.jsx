import Banner from "../components/Home/Banner"
import Category from "../components/Home/Category"


const Home = () => {
  return (
    <div>
      <Banner />

      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <Category />
      </div>
    </div>
  )
}

export default Home